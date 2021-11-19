import filmsCardTpl from '../templates/filmCard.hbs';
import NewApiService from './apiService';

const listElement = document.querySelector('.film-cards-list');
const logoEl = document.querySelector('.logo');
const btnHome = document.querySelector('.nav-button__home');
const newApiService = new NewApiService();

render();

logoEl.addEventListener('click', onLogoClick);
btnHome.addEventListener('click', onLogoClick);

// рендер популярних фильмов по клику на лого
function onLogoClick(e) {
  e.preventDefault();
  render();
}


export function render() {
  newApiService.page = 1;
  newApiService
    .addGenresToMovieObj()
    .then(renderFilmsCard)
    .catch(err => {
      console.log('error in function render');
    });
}


function renderFilmsCard(articles) {
  listElement.innerHTML = filmsCardTpl(articles);

};