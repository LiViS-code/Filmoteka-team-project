import {
  listWatchedFilms,
  listQueuedFilms,
  paginationContainer,
  watchedBtn,
  queueBtn,
} from './refs';
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

export function filterWatchedId(page) {
  let start = 0;
  let end = 9;
  const step = 9;

  let updateWatchedFilms = getIdFromLocalStorage('watchedFilms');
  let updateQueuedFilms = getIdFromLocalStorage('queuedFilms');

  if (watchedBtn.classList.contains('btn-current')) {
    if (page < 2) {
      const firstWatchedId = updateWatchedFilms.slice(start, end);
      listWatchedFilms.innerHTML = '';

      fetchFilmsById(firstWatchedId, appendWatchedFilmsMarkup);
      return;
    }

    start += step * (page - 1);
    end += step * (page - 1);

    const nextWatchedId = updateWatchedFilms.slice(start, end);
    listWatchedFilms.innerHTML = '';

    fetchFilmsById(nextWatchedId, appendWatchedFilmsMarkup);
  }

  if (queueBtn.classList.contains('btn-current')) {
    if (page < 2) {
      const firstQueuedId = updateQueuedFilms.slice(start, end);
      listQueuedFilms.innerHTML = '';

      fetchFilmsById(firstQueuedId, appendQueueFilmsMarkup);
      return;
    }

    start += step * (page - 1);
    end += step * (page - 1);

    const nextQueuedId = updateQueuedFilms.slice(start, end);
    listQueuedFilms.innerHTML = '';

    fetchFilmsById(nextQueuedId, appendQueueFilmsMarkup);
  }
}

export function checkPaginationForLibrary(updatedLocaleStorage) {
  if (watchedBtn.classList.contains('btn-current')) {
    console.log('check FOR WATCHED');
    if (!updatedLocaleStorage) {
      paginationContainer.classList.add('visually-hidden');
      return;
    }
    if (updatedLocaleStorage.length <= 9) {
      console.log('меньше 9');
      paginationContainer.classList.add('visually-hidden');
      return;
    }
    pagination(updatedLocaleStorage.length, 9);
    return;
  }
  if (queueBtn.classList.contains('btn-current')) {
    console.log('check FOR Queued');
    if (!updatedLocaleStorage) {
      paginationContainer.classList.add('visually-hidden');
      return;
    }
    if (updatedLocaleStorage.length <= 9) {
      console.log('меньше 9');
      paginationContainer.classList.add('visually-hidden');
      return;
    }
    pagination(updatedLocaleStorage.length, 9);
    return;
  }
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

export function ckechQueueFilms() {
  if (arrOfQueuedId) {
    paginationContainer.classList.remove('visually-hidden');
    return;
  }
  paginationContainer.classList.add('visually-hidden');
}
