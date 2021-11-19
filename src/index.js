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
