import filmsCardTpl from '../templates/filmCard.hbs';
import ApiService from './api-service';
import { warningField, searchField, listElement, paginationContainer } from './refs';
import pagination from './pagination';
import search from './spinner';
import { scrollWin } from './card-fetch';
import toTopBtn from './on-top-button';
import { setLanguageQuery } from './language-interface';

export const filmApiService = new ApiService();

function addGenresToSearchObj() {
  filmApiService.language = setLanguageQuery(localStorage.getItem('languageSetting'));
  console.log('язык запроса', filmApiService.languagePage);
  return filmApiService
    .fetchSearchFilms()
    .then(data => {
      if (data.errors) {
        const err = data.errors[0];
        throw err;
      }
      if (data.total_results === 0) {
        const err = 'Search result not successful. Enter the correct movie name and retry!';
        throw err;
      } else {
        if (paginationContainer.classList.contains('visually-hidden'))
          paginationContainer.classList.remove('visually-hidden');
        pagination(data.total_results, 20, filmApiService.page);
        return data;
      }
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
    })
    .catch(error => {
      warningField.textContent = error;
      paginationContainer.classList.add('visually-hidden');
    });
}

export function FilmSearchByWordPagination(searchedFilm, selectPage) {
  filmApiService.pageNum = selectPage;
  filmApiService.query = searchedFilm;
  render(filmApiService.query);
}

export function FilmSearchByWord(e) {
  search.spinner.show();
  filmApiService.pageNum = 1;
  e.preventDefault();
  filmApiService.query = e.currentTarget.elements.query.value;
  let currentFilmSearchByWord = e.currentTarget.elements.query.value;
  localStorage.setItem('searched', currentFilmSearchByWord);

  if (filmApiService.query === '') {
    search.spinner.close();
    warningField.textContent = 'Please write something!';
    return;
  }

  render(filmApiService.query);
  search.spinner.close();
  toTopBtn();
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
