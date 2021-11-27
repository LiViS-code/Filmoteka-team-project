import { watchedBtn, queueBtn, listWatchedFilms, listQueuedFilms } from './refs';
import { checkWatchedFilms, ckechQueueFilms } from './library';

queueBtn.addEventListener('click', btnClick);
watchedBtn.addEventListener('click', btnClick);

function btnClick(e) {
  const numBtn = e.target === queueBtn ? 1 : 2;
  switch (numBtn) {
    case 1:
      watchedBtn.classList.remove('btn-current');
      queueBtn.classList.add('btn-current');
      listWatchedFilms.classList.add('visually-hidden');
      listQueuedFilms.classList.remove('visually-hidden');
      checkWatchedFilms();
      break;
    case 2:
      watchedBtn.classList.add('btn-current');
      queueBtn.classList.remove('btn-current');
      listWatchedFilms.classList.remove('visually-hidden');
      listQueuedFilms.classList.add('visually-hidden');
      ckechQueueFilms();
      break;
  }
}
