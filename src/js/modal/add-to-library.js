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
    console.log('написано на кнопке', e.target.textContent);
    console.log('фактический ключ', e.target.dataset.mkey);
    if (e.target.dataset.mkey === 'mWatchedRemove') {
      return removeFromList('mWatched', 'watchedFilms', e);
    }
    if (e.target.dataset.mkey === 'mWatched') {
      return addToList('mWatchedRemove', 'watchedFilms', e);
    }
  }

  if (e.target.classList.contains('add-t-q')) {
    if (e.target.dataset.mkey === 'mQueueRemove') {
      return removeFromList('mQueue', 'queuedFilms', e);
    }
    if (e.target.dataset.mkey === 'mQueue') {
      return addToList('mQueueRemove', 'queuedFilms', e);
    }
  }
}

function removeFromList(key, nameList, event) {
  event.target.dataset.mkey = key;
  event.target.textContent = vocabulary[key][vocabulary[defineLanguage()]];
  deleteFilmFromLibrary(event, getIdFromLocalStorage(nameList), nameList);
  addNewFilmsToList(nameList);
}

function addToList(key, nameList, event) {
  addNewFilmsToList(nameList);
  addFilmsIdToLocalStorage(nameList, getIdFromCard(event));
  event.target.dataset.mkey = key;
  event.target.textContent = vocabulary[key][vocabulary[defineLanguage()]];
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
