// основной скрипт
import './js/onBtnClick';
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

refs.myLibraryBtn.addEventListener('click', onMyLibraryClick);

refs.logoEl.addEventListener('click', onLogoClick);
refs.btnHome.addEventListener('click', onLogoClick);
refs.searchForm.addEventListener('submit', FilmSearchByWord);
refs.searchField.addEventListener('click', resetSearchField);
// для модального окна
refs.filmCards.forEach(element => {
  element.addEventListener('click', toggleModal)
});
refs.modalButtonClose.addEventListener('click', toggleModal);

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    //response handling
  })
  .then(data => {
    // data handling
  })
  .catch(error => {
    // error handling
  });
