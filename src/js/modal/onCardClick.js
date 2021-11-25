import refs from '../Refs';
import filmInfoTpl from '../../templates/film-info.hbs';
import { toggleModal } from './toggleModal';

export function onCardClick(event) {
    toggleModal();
    event.preventDefault();
    console.log(`это идентиф фильма ${getFilmId(event)}`);
    console.log(fetchFilmInfo(getFilmId(event)));
}

//Функция получения идентификатора фильма, на карточку которого кликнули
function getFilmId(event) {
    let filmId = 0;
    if (event.target.classList.contains('card__film')) {
        filmId = event.target.dataset.action;

    } else
        if (event.target.parentNode.classList.contains('card__film')) {
            filmId = event.target.parentNode.dataset.action;

        } else
            if (event.target.parentNode.parentNode.classList.contains('card__film')) {
                filmId = event.target.parentNode.parentNode.dataset.action;

            }
    return filmId;
}

function fetchFilmInfo(filmId) {
    const BASE_URL = `https://api.themoviedb.org/3`;
    const KEY = `b7df999202e1c3618d01db23ce0076f0`;
    const url = `${BASE_URL}/movie/${filmId}?api_key=${KEY}&language=en-US`;
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            refs.modalWindowContent.insertAdjacentHTML('beforeend', filmInfoTpl(data));
        });
}