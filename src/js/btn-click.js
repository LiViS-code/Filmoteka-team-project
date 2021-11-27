import { watchedBtn, queueBtn, listWatchedFilms, listQueuedFilms } from './refs';
import { checkWatchedFilms, ckechQueueFilms } from './library';

queueBtn.addEventListener('click', () => btnClick('remove', 'add', ckechQueueFilms));
watchedBtn.addEventListener('click', () => btnClick('add', 'remove', checkWatchedFilms));

function btnClick(action1, action2, func) {
  watchedBtn.classList[action1]('btn-current');
  queueBtn.classList[action2]('btn-current');
  listWatchedFilms.classList[action2]('visually-hidden');
  listQueuedFilms.classList[action1]('visually-hidden');
  func();
}
