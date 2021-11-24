import refs from './Refs';
import { checkWatchedFilms, ckechQueueFilms } from './library';

refs.queueBtn.addEventListener('click', onQueueBtnClick);
refs.watchedBtn.addEventListener('click', onWatchedBtnClick);

function onQueueBtnClick() {
  refs.watchedBtn.classList.remove('btn-current');
  refs.queueBtn.classList.add('btn-current');
  refs.listWatchedFilms.classList.add('visually-hidden');
  refs.listQueuedFilms.classList.remove('visually-hidden');
  ckechQueueFilms();
}
function onWatchedBtnClick() {
  refs.watchedBtn.classList.add('btn-current');
  refs.queueBtn.classList.remove('btn-current');
  refs.listQueuedFilms.classList.add('visually-hidden');
  refs.listWatchedFilms.classList.remove('visually-hidden');
  checkWatchedFilms();
}
