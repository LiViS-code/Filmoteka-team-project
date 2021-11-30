import { watchedBtn, queueBtn, listWatchedFilms, listQueuedFilms } from './refs';
import { checkPaginationForLibrary, filterId } from './library';
import { updateListId } from '../js/modal/add-to-library';

queueBtn.addEventListener('click', () =>
  btnClick('remove', 'add', checkPaginationForLibrary, filterId),
);
watchedBtn.addEventListener('click', () =>
  btnClick('add', 'remove', checkPaginationForLibrary, filterId),
);

function btnClick(action1, action2, checkFunc, filterFunc) {
  watchedBtn.classList[action1]('btn-current');
  queueBtn.classList[action2]('btn-current');
  listWatchedFilms.classList[action2]('visually-hidden');
  listQueuedFilms.classList[action1]('visually-hidden');

  if (watchedBtn.classList.contains('btn-current')) {
    checkFunc(updateListId('watchedFilms'));
    filterFunc(1);
    return;
  }
  checkFunc(updateListId('queuedFilms'));
  filterFunc(1);
}
