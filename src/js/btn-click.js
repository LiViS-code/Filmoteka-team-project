import { watchedBtn, queueBtn, listWatchedFilms, listQueuedFilms } from './refs';
import { checkPaginationForLibrary, getIdFromLocalStorage } from './library';

queueBtn.addEventListener('click', () => btnClick('remove', 'add', checkPaginationForLibrary));
watchedBtn.addEventListener('click', () => btnClick('add', 'remove', checkPaginationForLibrary));

function btnClick(action1, action2, func) {
  watchedBtn.classList[action1]('btn-current');
  queueBtn.classList[action2]('btn-current');
  listWatchedFilms.classList[action2]('visually-hidden');
  listQueuedFilms.classList[action1]('visually-hidden');

  let updatedLocaleStorageWatched = getIdFromLocalStorage('watchedFilms');
  let updatedLocaleStorageQueued = getIdFromLocalStorage('queuedFilms');
  if (watchedBtn.classList.contains('btn-current')) {
    func(updatedLocaleStorageWatched);
    return;
  }
  func(updatedLocaleStorageQueued);
}
