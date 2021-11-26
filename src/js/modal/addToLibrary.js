import refs from '../Refs';
/* refs.addToWatchedBtn.addEventListener('click', onAddToWatchedBtnClick) */
/* refs.addToQueuedBtn.addEventListener('click', onAddToQueuedBtnClick) */
// Кнопки выбраны не те, просто чтоб потестить, потом заменить
/* refs.watchedBtn.addEventListener('click', onAddToWatchedBtnClick)
refs.queueBtn.addEventListener('click', onAddToQueuedBtnClick) */

refs.body.addEventListener('click', onAddToLibraryBtnClick);

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
    return
  }
  filmsId.push(id)
}

function addFilmsIdToLocalStorage(keyName, id) {
  filmsId = localStorage.getItem(keyName) ? JSON.parse(localStorage.getItem(keyName)) : []
  addFilmId(id)
  localStorage.setItem(keyName, JSON.stringify(filmsId))
}

function onAddToLibraryBtnClick(e) {

  if (e.target.classList.contains('add-t-w')) {
    addFilmsIdToLocalStorage('watchedFilms', getIdFromCard(e))
  }
  if (e.target.classList.contains('add-t-q')) {
    addFilmsIdToLocalStorage('queuedFilms', getIdFromCard(e))
  }
}


  