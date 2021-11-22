import filmsCardTpl from '../templates/filmCard.hbs';
import ApiService from './apiService';
import * as cardFetch from './cardFetch';
import refs from './Refs';
import Pagination from 'tui-pagination';

const filmApiService = new ApiService();
const pagination = new Pagination(refs.paginationContainer);

//Поиска и рендер фильмов по названию(слову)

export function FilmSearchByWordPagination(searchedFilm, selectPage) {
  filmApiService.pageNum = selectPage;
  filmApiService.query = searchedFilm;
  render(filmApiService.query);
}
// function backToFirstPage() {
//   refs.paginationContainer = pagination.firstPage();
// }

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

  render(filmApiService.query);
  refs.warningField.textContent = '';
}

function render(searchQuery) {
  filmApiService.query = searchQuery;
  filmApiService
    .addGenresToSearchObj()
    .then(renderFilmsCard)
    .catch(err => {
      console.log('error in function render');
    });
}

function renderFilmsCard(articles) {
  refs.listElement.innerHTML = filmsCardTpl(articles);
}
