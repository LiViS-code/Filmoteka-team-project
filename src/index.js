// основной скрипт
import './js/onBtnClick';
import './js/team-modal';
import './team.json';
// файл стилей
import './sass/main.scss';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';

// скрипт взаимодействия с API
import './js/apiService';
import { onLogoClick } from './js/cardFetch';
import { FilmSearchByWord } from './js/searchFilms';
import { resetSearchField } from './js/searchFilms';
import refs from './js/Refs';


// файл шаблонизатор страницы
// import listCards from './templates/listCards.hbs';

// спиннер
// import { Spinner } from 'spin.js';
// import { log } from 'handlebars';

// библиотека
import './js/modal/addToLibrary';
import './js/library';

// изменение фона по клику
localStorage.setItem('searched', '');

// изменение фона хедера
import { onMyLibraryClick } from './js/modal/onMyLibraryClick';
import { toggleModal } from './js/modal/toggleModal';
import { onCardClick } from './js/modal/onCardClick';


refs.myLibraryBtn.addEventListener('click', onMyLibraryClick);

refs.logoEl.addEventListener('click', onLogoClick);
refs.btnHome.addEventListener('click', onLogoClick);
refs.searchForm.addEventListener('submit', FilmSearchByWord);


// для модального окна
refs.listElement.addEventListener('click', onCardClick);
refs.modalContainerEl.addEventListener('click', onOverlayClick);
//refs.modalButtonClose.addEventListener('click', toggleModal);

function onOverlayClick(event) {
  if (event.target === event.currentTarget) {
    toggleModal();
  }
}





