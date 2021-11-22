import refs from '../Refs';

refs.addToQueuedBtn.addEventListener('click', onAddToQueuedBtnClick)

/* Добавить инфу по фильму в объект */

function addFilmInfo(id, genre) {
  const filmInfo = {
    id,
    genre,
  }
  }

function onAddToQueuedBtnClick() {
  addFilmInfo(/* информация по выбранному фильму */)
  const films = []
  films.push(filmInfo)
  localStorage.setItem(queuedFilms, JSON.stringify(films))
}