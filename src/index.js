// основной скрипт
import './js/onBtnClick';
// файл стилей
import './sass/main.scss';

// скрипт взаимодействия с API
import './js/apiService';
import { onLogoClick } from './js/cardFetch';
import { FilmSearchByWord } from './js/searchFilms';
import refs from './js/Refs';

// пагинация
import pagination from './js/pagination';

// файл шаблонизатор страницы
import listCards from './templates/listCards.hbs';

// спиннер
import { Spinner } from 'spin.js';

//изменение фона по клику

refs.myLibraryBtn.addEventListener('click', onMyLibraryClick);

refs.logoEl.addEventListener('click', onLogoClick);
refs.btnHome.addEventListener('click', onLogoClick);
refs.searchForm.addEventListener('submit', FilmSearchByWord);

function onMyLibraryClick() {
  bgImageChange('home-header', 'library-header');
}

function bgImageChange(oldBg, newBg) {

    if (refs.headerEl.classList.contains(oldBg)) {
        console.log('contains!')
        refs.headerEl.classList.remove(oldBg);
    }
    refs.headerEl.classList.add(newBg);
    refs.myLibraryBtn.classList.add('active');
    refs.myHomeBtn.classList.remove('active');
    refs.searchBox.classList.add('visually-hidden');
    refs.mainSection.classList.add('visually-hidden');
    refs.libraryMainSection.classList.remove('visually-hidden');
    refs.warningField.classList.add('visually-hidden');
}

