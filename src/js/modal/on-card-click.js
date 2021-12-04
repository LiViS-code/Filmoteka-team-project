import { modalContainerEl, modalWindowContent, modalButtonClose } from '../refs';
import filmInfoTpl from '../../templates/film-info.hbs';
import { toggleModal } from './toggle-modal';
import { updateListId } from './add-to-library';
import search from '../spinner';
import { filmApiService } from '../search-films';

export function onCardClick(event) {
  if (event.target.tagName === 'UL') return;
  search.spinner.show();
  toggleModal();
  fetchFilmInfo(getFilmId(event), updateListId('watchedFilms'), updateListId('queuedFilms'));
  search.spinner.close();
  modalContainerEl.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', onOverlayClick);
}

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
  modalWindowContent.innerHTML = '';
  return filmApiService.fetchId(filmId).then(data => {
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
