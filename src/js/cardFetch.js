import filmsCardTpl from '../templates/filmCard.hbs';
import NewApiService from './apiService';
import refs from './Refs';
import '../sass/main.scss';

const newApiService = new NewApiService();

const numFirstPage = 1;

render(numFirstPage);

// рендер популярних фильмов по клику на лого
export function onLogoClick(e) {
  e.preventDefault();
  localStorage.setItem('searched', '');
  bgImageChangeMain('home-header', 'library-header');
  render();
}

export function render(numPage) {
  newApiService.pageNum = numPage;

  // console.log(newApiService.pageNum);

  newApiService
    .addGenresToMovieObj()
    .then(renderFilmsCard)
    .catch(err => {
      console.log('error in function render', err);
    });
}

function renderFilmsCard(articles) {
  scrollWin();
  refs.listElement.innerHTML = filmsCardTpl(articles);
}

export function fetchPopularFilmsByPage(page) {
  newApiService.pageNum = page;
  return newApiService.addGenresToMovieObj();
}

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
function scrollWin() {
  window.scrollTo({
    top: 0,
    belavior: "smooth"
  })
    ;
}