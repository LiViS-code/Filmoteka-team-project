import filmsCardTpl from '../templates/filmCard.hbs';
import ApiService from './apiService';
import * as cardFetch from './cardFetch';
import refs from "./Refs";


const filmApiService = new ApiService();

//Поиска и рендер фильмов по названию(слову)

export function FilmSearchByWord(e) {
   filmApiService.pageNum = 1;
  e.preventDefault();
  filmApiService.query = e.currentTarget.elements.query.value;
  if (filmApiService.query === '') {
   refs.warningField.textContent = `Please write something!!!`;
    return;
  }
  render(filmApiService.query);
    e.currentTarget.elements.query.value = '';
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
};

