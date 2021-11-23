import filmsCardTpl from '../templates/filmCard.hbs';
import ApiService from './apiService';
import * as cardFetch from './cardFetch';
import refs from './Refs';
import Pagination from 'tui-pagination';
import { addPagination } from './pagination';

const filmApiService = new ApiService();
const pagination = new Pagination(refs.paginationContainer);

//добавляем жанры на поиск
function addGenresToSearchObj() {
  return filmApiService
    .fetchSearchFilms()
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

const onLoad = async () => {
  return filmApiService.fetchSearchFilms().then(data => {
    console.log(data.total_results);
    data.total_results;
  });
};

function refreshPaginationPages() {
  return onLoad()
    .then(data => addPagination(1000, 20))
    .catch(err => {
      console.log('error in function refreshPaginationPages');
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
  e.preventDefault();

  filmApiService.query = e.currentTarget.elements.query.value;
  let currentFilmSearchByWord = e.currentTarget.elements.query.value;
  localStorage.setItem('searched', currentFilmSearchByWord);

  if (filmApiService.query === '') {
    refs.warningField.textContent = `Please write something!!!`;
    return;
  }
  refreshPaginationPages(filmApiService.query);

  render(filmApiService.query);

  refs.searchField.value = '';
  refs.warningField.textContent = '';
}

function render(searchQuery) {
  filmApiService.query = searchQuery;

  addGenresToSearchObj()
    .then(renderFilmsCard)
    .catch(err => {
      console.log('error in function render');
    });
}

function renderFilmsCard(articles) {
  refs.listElement.innerHTML = filmsCardTpl(articles);
}
