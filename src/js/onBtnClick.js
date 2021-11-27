import refs from './Refs';
import { checkWatchedFilms, ckechQueueFilms } from './library';
import { onCardClick } from './modal/onCardClick';

refs.queueBtn.addEventListener('click', onQueueBtnClick);
refs.watchedBtn.addEventListener('click', onWatchedBtnClick);

function onQueueBtnClick() {
  refs.watchedBtn.classList.remove('btn-current');
  refs.queueBtn.classList.add('btn-current');
  refs.listWatchedFilms.classList.add('visually-hidden');
  refs.listQueuedFilms.classList.remove('visually-hidden');
  ckechQueueFilms();
  refs.listWatchedFilms.removeEventListener('click', onCardClick);
  refs.listQueuedFilms.addEventListener('click', onCardClick);
}
function onWatchedBtnClick() {
  refs.watchedBtn.classList.add('btn-current');
  refs.queueBtn.classList.remove('btn-current');
  refs.listQueuedFilms.classList.add('visually-hidden');
  refs.listWatchedFilms.classList.remove('visually-hidden');
  checkWatchedFilms();
  refs.listWatchedFilms.addEventListener('click', onCardClick);
  refs.listQueuedFilms.removeEventListener('click', onCardClick);
}
