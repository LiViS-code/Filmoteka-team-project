import refs from '../Refs';

/* refs.addToWatchedBtn.addEventListener('click', onAddToWatchedBtnClick) */
/* refs.addToQueuedBtn.addEventListener('click', onAddToQueuedBtnClick) */
// Кнопки выбраны не те, просто чтоб потестить, потом заменить
refs.watchedBtn.addEventListener('click', onAddToWatchedBtnClick)
refs.queueBtn.addEventListener('click', onAddToQueuedBtnClick)

/* Добавить инфу по фильму в объект */

let filmsId = [];

function addFilmId(id) {
  if (filmsId.includes(id)) {
    return
  }
  filmsId.push(id)
}

function addFilmsIdToLocalStorage(keyName) {
  filmsId = localStorage.getItem(keyName) ? JSON.parse(localStorage.getItem(keyName)) : []
  addFilmId(512195/* id фильма */)
  addFilmId(634649/* id фильма */)
  addFilmId(634648/* id фильма */)
  addFilmId(634646/* id фильма */)
  addFilmId(634643/* id фильма */)
  addFilmId(634642/* id фильма */)
  addFilmId(634641/* id фильма */)
  addFilmId(634640/* id фильма */)
  addFilmId(634649/* id фильма */)
  addFilmId(634649/* id фильма */)
  addFilmId(634649/* id фильма */)
  addFilmId(634655/* id фильма */)
  addFilmId(634656/* id фильма */)
  addFilmId(634657/* id фильма */)
  addFilmId(634658/* id фильма */)
  addFilmId(634659/* id фильма */)
  addFilmId(634660/* id фильма */)
  localStorage.setItem(keyName, JSON.stringify(filmsId))
}

function onAddToWatchedBtnClick() {
  addFilmsIdToLocalStorage('watchedFilms')
}

function onAddToQueuedBtnClick() {
  addFilmsIdToLocalStorage('queuedFilms')
}