import { listWatchedFilms, listQueuedFilms, paginationContainer } from './refs';
import ApiService from './api-service';
import filmsCardTpl from '../templates/filmCard.hbs';
import pagination from './pagination';
import '../sass/main.scss';

export function getIdFromLocalStorage(keyName) {
  const filmsId = JSON.parse(localStorage.getItem(keyName));
  return filmsId;
}
let itemsInWatched = 0;
let itemsInQueue = 0;

const arrOfWatchedId = getIdFromLocalStorage('watchedFilms');
const arrOfQueuedId = getIdFromLocalStorage('queuedFilms');

if (arrOfWatchedId) itemsInWatched = arrOfWatchedId.length;
if (arrOfQueuedId) itemsInQueue = arrOfQueuedId.length;

export function PaginationForWatched() {
  pagination(itemsInWatched, 9);
  return;
}

export function PaginationForQueue() {
  pagination(itemsInQueue, 9);
  return;
}

const filmApiService = new ApiService();

export function appendWatchedFilmsMarkup(film) {
  /* for */
  listWatchedFilms.insertAdjacentHTML('beforeend', filmsCardTpl(film));
}
export function appendQueueFilmsMarkup(film) {
  /* for */
  listQueuedFilms.insertAdjacentHTML('beforeend', filmsCardTpl(film));
}

export function fetchFilmsById(arrId, markup) {
  if (arrId === null) {
    return;
  } else {
    arrId.forEach(id => {
      return filmApiService.fetchId(id).then(films => {
        let arrOfFilms = [];
        arrOfFilms.push(films);
        markup(arrOfFilms);
      });
    });
  }
}

fetchFilmsById(arrOfWatchedId, appendWatchedFilmsMarkup);
fetchFilmsById(arrOfQueuedId, appendQueueFilmsMarkup);

/* fetchFilmsById(arrOfQueuedId) */
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
/* console.log(cardFilm.dataset.action) */

export function checkWatchedFilms() {
  if (arrOfWatchedId !== null || undefined || '') {
    return;
  }

  paginationContainer.classList.add('visually-hidden');
}
export function ckechQueueFilms() {
  if (arrOfQueuedId !== null || undefined || '') {
    paginationContainer.classList.remove('visually-hidden');
    return;
  }
  paginationContainer.classList.add('visually-hidden');
}
