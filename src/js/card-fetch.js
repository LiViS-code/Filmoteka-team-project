import filmsCardTpl from '../templates/filmCard.hbs';
import NewApiService from './api-service';
import {
  warningField,
  paginationContainer,
  listQueuedFilms,
  listWatchedFilms,
  listElement,
  headerEl,
  myLibraryBtn,
  myHomeBtn,
  searchBox,
  mainSection,
  libraryMainSection,
  buttonBox,
  searchField,
} from './refs';
import '../sass/main.scss';
import search from './spinner';
import pagination from './pagination';
import { onCardClick } from './modal/on-card-click';
import toTopBtn from "./on-top-button";

const newApiService = new NewApiService();

const numFirstPage = 1;

render(numFirstPage);

//добавляем жанры на статику
function addGenresToMovieObj() {
  return newApiService
    .fetchPopularFilms()
    .then(data => {
      pagination(data.total_results, 20, newApiService.page);
      return data;
    })
    .then(data => data.results)
    .then(data => {
      return newApiService.fetchGenres().then(genresList => {
        return data.map(movie => ({
          ...movie,
          release_date: movie.release_date.split('-')[0],
          genres: movie.genre_ids.map(id => genresList.filter(el => el.id === id)).flat(),
        }));
      });
    });
}

// рендер популярних фильмов по клику на лого
export function onLogoClick(e) {
  // e.preventDefault();
  search.spinner.show();
  // newPlaceholder();
  resetSearchField();
  localStorage.setItem('searched', '');
  bgImageChangeMain('home-header', 'library-header');
  warningField.textContent = '';
  render(1);
  search.spinner.close();
  paginationContainer.classList.remove('visually-hidden');
  listQueuedFilms.removeEventListener('click', onCardClick);
  listWatchedFilms.removeEventListener('click', onCardClick);
  toTopBtn();
}

export function render(numPage) {
  newApiService.pageNum = numPage;
  search.spinner.show();
  scrollWin();
  addGenresToMovieObj()
    .then(renderFilmsCard)
    .then(data => {
      removeVoteByCard();
    })
    .catch(err => {
      console.log('error in function render', err);
    });
  search.spinner.close();
  toTopBtn();
}

function renderFilmsCard(articles) {
  listElement.innerHTML = filmsCardTpl(articles);
}

export function fetchPopularFilmsByPage(page) {
  newApiService.pageNum = page;
  return addGenresToMovieObj();
}

function bgImageChangeMain(oldBg, newBg) {
  if (headerEl.classList.contains(newBg)) {
    headerEl.classList.remove(newBg);
  }
  headerEl.classList.add(oldBg);
  myLibraryBtn.classList.remove('active');
  myHomeBtn.classList.add('active');
  searchBox.classList.remove('visually-hidden');
  mainSection.classList.remove('visually-hidden');
  libraryMainSection.classList.add('visually-hidden');
  warningField.classList.remove('visually-hidden');
  buttonBox.classList.add('visually-hidden');
  listQueuedFilms.removeEventListener('click', onCardClick);
  listWatchedFilms.removeEventListener('click', onCardClick);
}
export function scrollWin() {
  window.scrollTo({
    top: 0,
    belavior: 'smooth',
  });
}
// function newPlaceholder() {
//   let el= document.getElementById("search-field");
//   el.placeholder= "Popular";
// };
export function resetSearchField() {
  searchField.value = '';
}
export function removeVoteByCard() {
  const voteEl = document.querySelectorAll('#card__vote_average');
  for (let i = 0; i < voteEl.length; i++) voteEl[i].classList.add('visually-hidden');
}
