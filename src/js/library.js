
import refs from './Refs';
import ApiService from './apiService';
import filmsCardTpl from '../templates/filmCard.hbs';
import pagination from './pagination';
import '../sass/main.scss';

function getIdFromLocalStorage(keyName) {
  const filmsId = JSON.parse(localStorage.getItem(keyName));
  return filmsId;
}
const arrOfWatchedId = getIdFromLocalStorage('watchedFilms');
const arrOfQueuedId = getIdFromLocalStorage('queuedFilms');
console.log(arrOfWatchedId);
const filmApiService = new ApiService();

function appendWatchedFilmsMarkup(film) {
 /* for */
  refs.listWatchedFilms.insertAdjacentHTML('beforeend', filmsCardTpl(film)) 
}
function appendQueueFilmsMarkup(film) {
 /* for */
  refs.listQueuedFilms.insertAdjacentHTML('beforeend', filmsCardTpl(film)) 
}

function fetchFilmsById(arrId, markup) {
  if (arrId === null) {
    return;
  } else {
    arrId.forEach(id => {
    return filmApiService.fetchId(id).then(films => {
        let arrOfFilms = [];
        arrOfFilms.push(films);
            markup(arrOfFilms)
      }
      )
    })
 }
}

fetchFilmsById(arrOfWatchedId, appendWatchedFilmsMarkup) 
fetchFilmsById(arrOfQueuedId, appendQueueFilmsMarkup)
/* fetchFilmsById(arrOfQueuedId) */
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
/* console.log(refs.cardFilm.dataset.action) */

export function checkWatchedFilms() {
  if (arrOfWatchedId !== null || undefined || '') {
    console.log('Что-то есть');
    console.log(arrOfWatchedId);
    return;
  }
  console.log('Пусто');
  refs.paginationContainer.classList.add('visually-hidden');
}
export function ckechQueueFilms() {
  if (arrOfQueuedId !== null || undefined || '') {
    console.log('Что-то есть');
    console.log(arrOfQueuedId);
    refs.paginationContainer.classList.remove('visually-hidden');
    return;
  }
  console.log('Пусто');
  refs.paginationContainer.classList.add('visually-hidden');
}
