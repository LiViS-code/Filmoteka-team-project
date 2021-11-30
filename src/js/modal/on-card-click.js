import { modalContainerEl, modalWindowContent, modalButtonClose } from '../refs';
import filmInfoTpl from '../../templates/film-info.hbs';
import { toggleModal } from './toggle-modal';
import { updateListId } from './add-to-library';
import search from '../spinner';

export function onCardClick(event) {
  if (event.target.tagName === 'UL') return;
  search.spinner.show();
  toggleModal();
  fetchFilmInfo(getFilmId(event), updateListId('watchedFilms'), updateListId('queuedFilms'));
  search.spinner.close();
  modalContainerEl.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', onOverlayClick);
}

//Функция получения идентификатора фильма, на карточку которого кликнули
function getFilmId(event) {
  let filmId = 0;
  if (event.target.classList.contains('card__film')) {
    filmId = event.target.dataset.action;
  } else if (event.target.parentNode.classList.contains('card__film')) {
    filmId = event.target.parentNode.dataset.action;
  } else if (event.target.parentNode.parentNode.classList.contains('card__film')) {
    filmId = event.target.parentNode.parentNode.dataset.action;
  }
  return filmId;
}

function fetchFilmInfo(filmId, watchedId, queuedId) {
  const BASE_URL = `https://api.themoviedb.org/3`;
  const KEY = `b7df999202e1c3618d01db23ce0076f0`;
  const url = `${BASE_URL}/movie/${filmId}?api_key=${KEY}&language=en-US`;
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      modalWindowContent.innerHTML = filmInfoTpl(data);
      const addToWatchedBtn = document.querySelector('.add-t-w');
      const addToQueuedBtn = document.querySelector('.add-t-q');
      if (watchedId.includes(filmId)) {
        addToWatchedBtn.textContent = 'remove from watched';
      }
      if (queuedId.includes(filmId)) {
        addToQueuedBtn.textContent = 'remove from queue';
      }
    });
}

function onOverlayClick(event) {
  if (
    event.target === modalButtonClose ||
    event.target === modalContainerEl ||
    event.code === 'Escape'
  ) {
    toggleModal();
    modalContainerEl.removeEventListener('click', onOverlayClick);
    document.removeEventListener('keydown', onOverlayClick);
  }
}
