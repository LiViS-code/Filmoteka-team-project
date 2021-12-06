import { mainDoc, listWatchedFilms, listQueuedFilms } from '../refs';
import {
  fetchFilmsById,
  getIdFromLocalStorage,
  appendWatchedFilmsMarkup,
  appendQueueFilmsMarkup,
} from '../library';
import { vocabulary } from '../translate/vocabulary';
import { defineLanguage } from '../translate/language-module';

let filmsId = [];

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

function addFilmId(id) {
  if (!filmsId.includes(id)) filmsId.push(id);
  return;
}

function addFilmsIdToLocalStorage(key, id) {
  filmsId = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
  addFilmId(id);
  localStorage.setItem(key, JSON.stringify(filmsId));
}

function deleteFilmFromLibrary(event, idFromStorage, key) {
  let index = idFromStorage.indexOf(event.target.parentNode.parentNode.dataset.action);
  if (index !== -1) {
    idFromStorage.splice(index, 1);
  }
  localStorage.setItem(key, JSON.stringify(idFromStorage));
}

function onAddToLibraryBtnClick(e) {
  if (e.target.classList.contains('add-t-w')) {
    if (e.target.dataset.mkey === 'mWatchedRemove') {
      e.target.dataset.mkey = 'mWatched';
      e.target.textContent = vocabulary.mWatched[vocabulary[defineLanguage()]];
      deleteFilmFromLibrary(e, updateListId('watchedFilms'), 'watchedFilms');
      addNewFilmsToList('watchedFilms');
      return;
    }
    if (e.target.dataset.mkey === 'mWatched') {
      addNewFilmsToList('watchedFilms');
      addFilmsIdToLocalStorage('watchedFilms', getIdFromCard(e));
      e.target.dataset.mkey = 'mWatchedRemove';
      e.target.textContent = vocabulary.mWatchedRemove[vocabulary[defineLanguage()]];
    }
  }

  if (e.target.classList.contains('add-t-q')) {
    if (e.target.dataset.mkey === 'mQueueRemove') {
      e.target.dataset.mkey = 'mQueue';
      e.target.textContent = vocabulary.mQueue[vocabulary[defineLanguage()]];
      const updateLocaleStorageQueued = getIdFromLocalStorage('queuedFilms');
      deleteFilmFromLibrary(e, updateLocaleStorageQueued, 'queuedFilms');
      addNewFilmsToList('queuedFilms');
      return;
    }
    if (e.target.dataset.mkey === 'mQueue') {
      addNewFilmsToList('queuedFilms');
      addFilmsIdToLocalStorage('queuedFilms', getIdFromCard(e));
      e.target.dataset.mkey = 'mQueueRemove';
      e.target.textContent = vocabulary.mQueueRemove[vocabulary[defineLanguage()]];
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
