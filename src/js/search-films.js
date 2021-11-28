import filmsCardTpl from '../templates/filmCard.hbs';
import ApiService from './api-service';
import { warningField, searchField, listElement } from './refs';
import pagination from './pagination';
import search from './spinner';
import { scrollWin } from './card-fetch';
import toTopBtn from "./on-top-button";

const filmApiService = new ApiService();

//добавляем жанры на поиск
function addGenresToSearchObj() {
  return filmApiService
    .fetchSearchFilms()
    .then(data => {
      pagination(data.total_results, 20, filmApiService.page);
      return data;
    })
    .then(data => data.results)
    .then(data => {
      return filmApiService.fetchGenres().then(genresList => {
        return data.map(movie => ({
          ...movie,
          release_date: movie.release_date ? movie.release_date.split('-')[0] : 'n/a',
          genres: movie.genre_ids
            ? movie.genre_ids.map(id => genresList.filter(el => el.id === id)).flat()
            : 'n/a',
        }));
      });
    });
}

//Поиска и рендер фильмов по названию(слову)
export function FilmSearchByWordPagination(searchedFilm, selectPage) {
  filmApiService.pageNum = selectPage;
  filmApiService.query = searchedFilm;
  render(filmApiService.query);
}

export function FilmSearchByWord(e) {
  filmApiService.pageNum = 1;
  search.spinner.show();
  e.preventDefault();

  filmApiService.query = e.currentTarget.elements.query.value;
  let currentFilmSearchByWord = e.currentTarget.elements.query.value;
  localStorage.setItem('searched', currentFilmSearchByWord);

  if (filmApiService.query === '') {
    search.spinner.close();

    warningField.textContent = `Please write something!!!`;
    return;
  }

  render(filmApiService.query);
  toTopBtn();


  search.spinner.close();

  searchField.textContent = filmApiService.query;
  warningField.textContent = '';
}

function render(searchQuery) {
  filmApiService.query = searchQuery;

  addGenresToSearchObj()
    .then(renderFilmsCard)
    .catch(err => {
      console.log('error in function render', err);
    });
}

function renderFilmsCard(articles) {
  search.spinner.show();
  listElement.innerHTML = filmsCardTpl(articles);
  scrollWin();
  search.spinner.close();
}