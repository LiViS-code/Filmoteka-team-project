import refs from '../Refs';

/* refs.addToWatchedBtn.addEventListener('click', onAddToWatchedBtnClick) */
/* refs.addToQueuedBtn.addEventListener('click', onAddToQueuedBtnClick) */
// Кнопки выбраны не те, просто чтоб потестить, потом заменить
refs.watchedBtn.addEventListener('click', onAddToWatchedBtnClick)
refs.queueBtn.addEventListener('click', onAddToQueuedBtnClick)

/* Добавить инфу по фильму в объект */

let filmsId = [];

function addFilmId(id) {
  filmsId.push(id)
}

function addFilmsIdToLocalStorage(keyName) {
  filmsId = localStorage.getItem(keyName) ? JSON.parse(localStorage.getItem(keyName)) : []
  addFilmId(2/* id фильма */)
  localStorage.setItem(keyName, JSON.stringify(filmsId))
}

function onAddToWatchedBtnClick() {
  addFilmsIdToLocalStorage('watchedFilms')
}

function onAddToQueuedBtnClick() {
  addFilmsIdToLocalStorage('queuedFilms')
}