import refs from '../Refs';

refs.addToWatchedBtn.addEventListener('click', onAddToWatchedBtnClick)

/* Добавить инфу по фильму в объект */

function addFilmInfo(id, genre) {
  const filmInfo = {
    id,
    genre,
  }
  }

function onAddToWatchedBtnClick() {
  addFilmInfo(/* информация по выбранному фильму */)
  const films = []
  films.push(filmInfo)
  localStorage.setItem(watchedFilms, JSON.stringify(films))
}