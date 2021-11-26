import refs from '../Refs';
/* refs.addToWatchedBtn.addEventListener('click', onAddToWatchedBtnClick) */
/* refs.addToQueuedBtn.addEventListener('click', onAddToQueuedBtnClick) */
// Кнопки выбраны не те, просто чтоб потестить, потом заменить
/* refs.watchedBtn.addEventListener('click', onAddToWatchedBtnClick)
refs.queueBtn.addEventListener('click', onAddToQueuedBtnClick) */

refs.body.addEventListener('click', onAddToLibraryBtnClick);
/* Добавить инфу по фильму в объект */

/* function getFilmId(event) {
  let filmId = 0;
  if (event.target.classList.contains('add-t-q')) {
        filmId = event.target.parentElement.dataset.action;
    
  }
  console.log(filmId)
    return filmId;
} */

let filmsId = [];

function addFilmId(id) {
  if (filmsId.includes(id)) {
    return
  }
  filmsId.push(id)
}

function addFilmsIdToLocalStorage(keyName) {
  filmsId = localStorage.getItem(keyName) ? JSON.parse(localStorage.getItem(keyName)) : []
  addFilmId()
  localStorage.setItem(keyName, JSON.stringify(filmsId))
}

function onAddToLibraryBtnClick(e) {
  if (e.target.classList.contains('add-t-w')) {
    addFilmsIdToLocalStorage('watchedFilms')
  }
  if (e.target.classList.contains('add-t-q')) {
    console.log('que')
    addFilmsIdToLocalStorage('queuedFilms')
  }
}

