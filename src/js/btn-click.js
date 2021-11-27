import refs from './Refs';
import { checkWatchedFilms, ckechQueueFilms } from './library';
import { onCardClick } from './modal/onCardClick';

refs.queueBtn.addEventListener('click', btnClick('remove', 'add', ckechQueueFilms));
refs.watchedBtn.addEventListener('click', btnClick('add', 'remove', checkWatchedFilms));

function btnClick(action1, action2, func) {
  refs.watchedBtn.classList[action1]('btn-current');
  refs.queueBtn.classList[action2]('btn-current');
  refs.listWatchedFilms.classList[action2]('visually-hidden');
  refs.listQueuedFilms.classList[action1]('visually-hidden');
  func();
}
