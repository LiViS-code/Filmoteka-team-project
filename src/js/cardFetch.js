import filmsCardTpl from '../templates/filmCard.hbs';
import NewApiService from './apiService';
import refs from './Refs';
import '../sass/main.scss';

const newApiService = new NewApiService();

render();

// рендер популярних фильмов по клику на лого
export function onLogoClick(e) {
  e.preventDefault();
  bgImageChangeMain('home-header', 'library-header');
  render();
}

export function render() {
  newApiService.pageNum = 1;
  console.log(newApiService.pageNum);

  newApiService
    .addGenresToMovieObj()
    .then(renderFilmsCard)
    .catch(err => {
      console.log('error in function render', err);
    });
}

function renderFilmsCard(articles) {
  refs.listElement.innerHTML = filmsCardTpl(articles);
}

// function fetchPopularFilmsByPage(page) {
//   newApiService.pageNum = page;
//   return newApiService.addGenresToMovieObj();
// }
// fetchPopularFilmsByPage(5)

function bgImageChangeMain(oldBg, newBg) {
  if (refs.headerEl.classList.contains(newBg)) {
    console.log('contains!');
    refs.headerEl.classList.remove(newBg);
  }
  refs.headerEl.classList.add(oldBg);
  refs.myLibraryBtn.classList.remove('active');
  refs.myHomeBtn.classList.add('active');
  refs.searchBox.classList.remove('visually-hidden');
  refs.mainSection.classList.remove('visually-hidden');
  refs.libraryMainSection.classList.add('visually-hidden');
  refs.warningField.classList.remove('visually-hidden');
  refs.buttonBox.classList.add('visually-hidden');
}
