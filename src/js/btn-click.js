import { watchedBtn, queueBtn, listWatchedFilms, listQueuedFilms } from './refs';
import { checkPaginationForWatched, ckechQueueFilms, getIdFromLocalStorage } from './library';

queueBtn.addEventListener('click', () => btnClick('remove', 'add', ckechQueueFilms));
watchedBtn.addEventListener('click', () => btnClick('add', 'remove', checkPaginationForWatched));

function btnClick(action1, action2, func) {
  watchedBtn.classList[action1]('btn-current');
  queueBtn.classList[action2]('btn-current');
  listWatchedFilms.classList[action2]('visually-hidden');
  listQueuedFilms.classList[action1]('visually-hidden');
  let updatedLocaleStorageWatched = getIdFromLocalStorage('watchedFilms');
  func(updatedLocaleStorageWatched);
}
