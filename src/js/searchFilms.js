import filmsCardTpl from '../templates/filmCard.hbs';
import ApiService from './apiService';
import * as cardFetch from './cardFetch';

const refs = {
  searchForm: document.querySelector('#search-form'),
   warningField: document.querySelector('.warning-message'),
};
const filmApiService = new ApiService();
const listElement = document.querySelector('.film-cards-list');

refs.searchForm.addEventListener('submit', FilmSearchbyWord);

//Поиска и рендер фильмов по названию(слову)

function FilmSearchbyWord(e) {
   filmApiService.pageNum = 1;
  e.preventDefault();
  filmApiService.query = e.currentTarget.elements.query.value;
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
  listElement.innerHTML = filmsCardTpl(articles);
};

