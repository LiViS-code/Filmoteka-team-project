import filmsCardTpl from '../templates/filmCard.hbs';
import NewApiService from './apiService';
import refs from "./Refs";


const newApiService = new NewApiService();

render();

refs.logoEl.addEventListener('click', onLogoClick);
refs.btnHome.addEventListener('click', onLogoClick);

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
  refs.listElement.innerHTML = filmsCardTpl(articles);

};