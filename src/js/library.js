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
import search from './spinner';
import { languageQuery } from './language-interface';

let itemsInWatched = 0;
let itemsInQueue = 0;

const arrOfWatchedId = getIdFromLocalStorage('watchedFilms');
const arrOfQueuedId = getIdFromLocalStorage('queuedFilms');

if (arrOfWatchedId) itemsInWatched = arrOfWatchedId.length;
if (arrOfQueuedId) itemsInQueue = arrOfQueuedId.length;

let step = 9;
let end = 9;
let quantityForPagination = 9;

export function getIdFromLocalStorage(keyName) {
  const filmsId = JSON.parse(localStorage.getItem(keyName)) || [];
  return filmsId;
}

export function filterId(page) {
  if (document.documentElement.clientWidth < 1023) {
    step = 8;
    end = 8;
  }
  if (document.documentElement.clientWidth < 767) {
    step = 4;
    end = 4;
  }
  let start = 0;

  let updateWatchedFilms = getIdFromLocalStorage('watchedFilms');
  let updateQueuedFilms = getIdFromLocalStorage('queuedFilms');

  if (watchedBtn.classList.contains('btn-current')) {
    if (!getIdFromLocalStorage('watchedFilms')) return;
    if (page < 2) {
      search.spinner.show();
      const firstWatchedId = updateWatchedFilms.slice(start, end);
      listWatchedFilms.innerHTML = '';
      fetchFilmsById(firstWatchedId, appendWatchedFilmsMarkup);
      search.spinner.close();
      return;
    }

    start += step * (page - 1);
    end += step * (page - 1);

    const nextWatchedId = updateWatchedFilms.slice(start, end);
    listWatchedFilms.innerHTML = '';

    fetchFilmsById(nextWatchedId, appendWatchedFilmsMarkup);
  }

  if (queueBtn.classList.contains('btn-current')) {
    if (!getIdFromLocalStorage('queuedFilms')) return;
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
  if (document.documentElement.clientWidth < 1023) {
    quantityForPagination = 8;
  }
  if (document.documentElement.clientWidth < 767) {
    quantityForPagination = 4;
  }

  if (watchedBtn.classList.contains('btn-current')) {
    if (!updatedLocaleStorage || updatedLocaleStorage.length <= quantityForPagination) {
      paginationContainer.classList.add('visually-hidden');
      return;
    }
    paginationContainer.classList.remove('visually-hidden');
    pagination(updatedLocaleStorage.length, quantityForPagination);
    if (document.documentElement.clientWidth < 1023) {
      pagination(updatedLocaleStorage.length, 8);
    }
    if (document.documentElement.clientWidth < 767) {
      pagination(updatedLocaleStorage.length, 4);
    }
    return;
  }

  if (queueBtn.classList.contains('btn-current')) {
    if (!updatedLocaleStorage || updatedLocaleStorage.length <= quantityForPagination) {
      paginationContainer.classList.add('visually-hidden');
      return;
    }
    paginationContainer.classList.remove('visually-hidden');
    pagination(updatedLocaleStorage.length, quantityForPagination);
    if (document.documentElement.clientWidth < 1023) {
      pagination(updatedLocaleStorage.length, 8);
    }
    if (document.documentElement.clientWidth < 767) {
      pagination(updatedLocaleStorage.length, 4);
    }
    return;
  }
}

const filmApiService = new ApiService();

export function appendWatchedFilmsMarkup(film) {
  listWatchedFilms.insertAdjacentHTML('beforeend', filmsCardTpl(film));
}

export function appendQueueFilmsMarkup(film) {
  listQueuedFilms.insertAdjacentHTML('beforeend', filmsCardTpl(film));
}

export function fetchFilmsById(arrId, markup) {
  if (arrId === null) {
    return;
  } else {
    filmApiService.language = languageQuery;
    arrId.forEach(id => {
      return filmApiService.fetchId(id).then(films => {
        let arrOfFilms = [];
        arrOfFilms.push(films);
        markup(arrOfFilms);
      });
    });
  }
}

export function ckechQueueFilms() {
  if (arrOfQueuedId) {
    paginationContainer.classList.remove('visually-hidden');
    return;
  }
  paginationContainer.classList.add('visually-hidden');
}
