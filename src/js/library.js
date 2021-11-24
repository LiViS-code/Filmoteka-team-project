
import refs from './Refs';
import ApiService from './apiService';
import filmsCardTpl from '../templates/filmCard.hbs';
import { addPagination } from './pagination';
import Refs from './Refs';
import '../sass/main.scss';

function getIdFromLocalStorage(keyName) {
  const filmsId = JSON.parse(localStorage.getItem(keyName) ) 
  return filmsId;
}
const arrOfWatchedId = getIdFromLocalStorage('watchedFilms')
const arrOfQueuedId = getIdFromLocalStorage('queuedFilms')
console.log(arrOfWatchedId)
const filmApiService = new ApiService();

function appendFilmsMarkup(film) {
refs.listWatchedFilms.insertAdjacentHTML('beforeend', filmsCardTpl(film))
}

function fetchFilmsById(arrId) {
  if(arrId === null) {
  return
  }
  else {
    arrId.forEach(id => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=b7df999202e1c3618d01db23ce0076f0&language=en-US`;
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        const arrData = [];
        arrData.push(data)
        appendFilmsMarkup(arrData)
        return data;
      });
  })
  }
};
 


fetchFilmsById(arrOfWatchedId)
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
/* console.log(refs.cardFilm.dataset.action) */