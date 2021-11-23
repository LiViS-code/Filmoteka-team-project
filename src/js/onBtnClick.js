import refs from "./Refs";

refs.queueBtn.addEventListener('click', onQueueBtnClick);
refs.watchedBtn.addEventListener('click', onWatchedBtnClick);


function onQueueBtnClick() {
    refs.watchedBtn.classList.remove('btn-current');
    refs.queueBtn.classList.add('btn-current');
    refs.listWatchedFilms.classList.add('visually-hidden');
    refs.listQueuedFilms.classList.remove('visually-hidden')
}
function onWatchedBtnClick(){
    refs.watchedBtn.classList.add('btn-current');
    refs.queueBtn.classList.remove('btn-current');
    refs.listQueuedFilms.classList.add('visually-hidden')
    refs.listWatchedFilms.classList.remove('visually-hidden');
}