// основной скрипт

// файл стилей
import './sass/main.scss';

// скрипт взаимодействия с API
import './js/apiService';
import { onLogoClick } from './js/cardFetch';
import { FilmSearchByWord } from './js/searchFilms';
import refs from './js/Refs';

// файл шаблонизатор страницы
import listCards from './templates/listCards.hbs';

// спиннер
import { Spinner } from 'spin.js';

//изменение фона по клику

const myLibraryBtn = document.querySelector('[data-action="my-library-rendering"]');
const myHomeBtn = document.querySelector('[data-action="home-page-rendering"]');
const headerEl = document.querySelector('header');
const searchBox = document.getElementById('search-box');
const mainSection = document.querySelector('.main-container');
const libraryMainSection = document.querySelector('.library-main');

myLibraryBtn.addEventListener('click', onMyLibraryClick);

refs.logoEl.addEventListener('click', onLogoClick);
refs.btnHome.addEventListener('click', onLogoClick);
refs.searchForm.addEventListener('submit', FilmSearchByWord);


function onMyLibraryClick() {
    bgImageChange('home-header', 'library-header');
}

function bgImageChange(oldBg, newBg) {
    if (headerEl.classList.contains(oldBg)) {
        console.log('contains!')
        headerEl.classList.remove(oldBg);
    }
    headerEl.classList.add(newBg);
    myLibraryBtn.classList.add('active');
    myHomeBtn.classList.remove('active');
    searchBox.classList.add('visually-hidden');
    mainSection.classList.add('visually-hidden');
    libraryMainSection.classList.remove('visually-hidden');
}
