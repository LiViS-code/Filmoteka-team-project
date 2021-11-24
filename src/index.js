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

refs.myLibraryBtn.addEventListener('click', onMyLibraryClick);

refs.logoEl.addEventListener('click', onLogoClick);
refs.btnHome.addEventListener('click', onLogoClick);
refs.searchForm.addEventListener('submit', FilmSearchByWord);
refs.searchField.addEventListener('click', resetSearchField);

function bgImageChange(oldBg, newBg) {
  if (headerEl.classList.contains(oldBg)) {
    console.log('contains!');
    headerEl.classList.remove(oldBg);
  }
  headerEl.classList.add(newBg);
}

// открытие модального окна
 
const modalContainer = document.querySelector("#modalContainer");
const filmCards = document.querySelectorAll(".card__film");
console.log(filmCards);
filmCards.forEach(element => {
    element.addEventListener('click' , event =>  {
        modalContainer.style = 'display: block';
        
    })
});
