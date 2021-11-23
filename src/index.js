// основной скрипт

// файл стилей
import './sass/main.scss';

// скрипт взаимодействия с API
import './js/apiService';
import './js/cardFetch';
import './js/searchFilms';
// файл шаблонизатор страницы
import listCards from './templates/listCards.hbs';

// спиннер
import { Spinner } from 'spin.js';
import { log } from 'handlebars';

//изменение фона по клику

const myLibraryBtn = document.querySelector('[data-action="my-library-rendering"]');
const headerEl = document.querySelector('header');

myLibraryBtn.addEventListener('click', onMyLibraryClick);

function onMyLibraryClick() {
    bgImageChange('home-header', 'library-header');
}

function bgImageChange(oldBg, newBg) {
    if (headerEl.classList.contains(oldBg)) {
        console.log('contains!')
        headerEl.classList.remove(oldBg);
    }
    headerEl.classList.add(newBg);
}

// // открытие модального окна
 
// const modalContainer = document.querySelector("#modalContainer");
// const cardFilmModal = document.querySelector("#card-film-js");
// console.log(cardFilmModal);

// // cardFilmModal.addEventListener('onclick' , event =>  {
// //     modalContainer.style = 'display: block';
// // })
