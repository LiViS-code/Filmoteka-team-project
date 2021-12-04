import { mainDoc, listWatchedFilms, listQueuedFilms } from '../refs';
import {
  fetchFilmsById,
  getIdFromLocalStorage,
  appendWatchedFilmsMarkup,
  appendQueueFilmsMarkup,
} from '../library';

mainDoc.addEventListener('click', onAddToLibraryBtnClick);

function getIdFromCard(e) {
  let filmId = 0;
  if (e.target.classList.contains('add-t-w')) {
    filmId = e.target.parentNode.parentNode.dataset.action;
    return filmId;
  }
  if (e.target.classList.contains('add-t-q')) {
    filmId = e.target.parentNode.parentNode.dataset.action;
    return filmId;
  }
}

let filmsId = [];

function addFilmId(id) {
  if (filmsId.includes(id)) {
    return;
  }
  filmsId.push(id);
}

function addFilmsIdToLocalStorage(keyName, id) {
  filmsId = localStorage.getItem(keyName) ? JSON.parse(localStorage.getItem(keyName)) : [];
  addFilmId(id);
  localStorage.setItem(keyName, JSON.stringify(filmsId));
}

function deleteFilmFromLibrary(event, idFromStorage, key) {
  let index = idFromStorage.indexOf(event.target.parentNode.parentNode.dataset.action);
  if (index !== -1) {
    idFromStorage.splice(index, 1);
  }
  localStorage.setItem(key, JSON.stringify(idFromStorage));
}

function onAddToLibraryBtnClick(e) {
  console.log('onAddToLibraryBtnClick', e.target);
  if (e.target.classList.contains('add-t-w')) {
    if (e.target.textContent === 'remove from watched') {
      e.target.textContent = 'add to watched';
      deleteFilmFromLibrary(e, updateListId('watchedFilms'), 'watchedFilms');
      addNewFilmsToList('watchedFilms');
      return;
    }
    if (e.target.textContent === 'add to watched') {
      addNewFilmsToList('watchedFilms');
      addFilmsIdToLocalStorage('watchedFilms', getIdFromCard(e));
      e.target.textContent = 'remove from watched';
    }
  }

  if (e.target.classList.contains('add-t-q')) {
    if (e.target.textContent === 'remove from queue') {
      e.target.textContent = 'add to queue';
      const updateLocaleStorageQueued = getIdFromLocalStorage('queuedFilms');
      deleteFilmFromLibrary(e, updateLocaleStorageQueued, 'queuedFilms');
      addNewFilmsToList('queuedFilms');
      return;
    }
    if (e.target.textContent === 'add to queue') {
      addNewFilmsToList('queuedFilms');
      addFilmsIdToLocalStorage('queuedFilms', getIdFromCard(e));
      e.target.textContent = 'remove from queue';
    }
  }
}

function addNewFilmsToList(nameList) {
  switch (nameList) {
    case 'watchedFilms':
      listWatchedFilms.innerHTML = '';
      fetchFilmsById(updateListId(nameList), appendWatchedFilmsMarkup);
      break;
    case 'queuedFilms':
      listQueuedFilms.innerHTML = '';
      fetchFilmsById(updateListId(nameList), appendQueueFilmsMarkup);
      break;
  }
}

export function updateListId(nameList) {
  const newListId = getIdFromLocalStorage(nameList);
  return newListId;
}
