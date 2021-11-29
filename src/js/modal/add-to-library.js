import { bodyDoc, listWatchedFilms, listQueuedFilms } from '../refs';
import {
  fetchFilmsById,
  getIdFromLocalStorage,
  appendWatchedFilmsMarkup,
  appendQueueFilmsMarkup,
} from '../library';

bodyDoc.addEventListener('click', onAddToLibraryBtnClick);

/* Ловит айди */

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

/* Функция удаления фильма из библиотеки */

function deleteFilmFromLibrary(event, idFromStorage, key) {
  let index = idFromStorage.indexOf(event.target.parentNode.parentNode.dataset.action)
      if (index !== -1) {
        idFromStorage.splice(index, 1)
      }
      localStorage.setItem(key, JSON.stringify(idFromStorage) )
    
}

function onAddToLibraryBtnClick(e) {
  if (e.target.classList.contains('add-t-w')) {
    addFilmsIdToLocalStorage('watchedFilms', getIdFromCard(e));

    addNewFilmsToWatched();

    
    
    if (e.target.textContent === 'remove from watched') {
      e.target.textContent = 'add to watched';

      deleteFilmFromLibrary(e, updatedWatchedId ,'watchedFilms')
      
      return;
    }
    e.target.textContent = 'remove from watched'
    
  }

  if (e.target.classList.contains('add-t-q')) {
    addFilmsIdToLocalStorage('queuedFilms', getIdFromCard(e));

    addNewFilmsToQueued();
    
    if (e.target.textContent === 'remove from queue') {
      e.target.textContent = 'add to queue';

      deleteFilmFromLibrary(e, updatedQueuedId, 'queuedFilms');
      
      return;
    }
    e.target.textContent = 'remove from queue';

  }
}
let updatedWatchedId = getIdFromLocalStorage('watchedFilms')
function addNewFilmsToWatched() {
  listWatchedFilms.innerHTML = '';
  fetchFilmsById(updatedWatchedId, appendWatchedFilmsMarkup);
}
let updatedQueuedId = getIdFromLocalStorage('queuedFilms');
function addNewFilmsToQueued() {
  listQueuedFilms.innerHTML = '';
  fetchFilmsById(updatedQueuedId, appendQueueFilmsMarkup);
}
