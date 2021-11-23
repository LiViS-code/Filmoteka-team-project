// основной скрипт
import './js/onBtnClick';
// файл стилей
import './sass/main.scss';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';

// скрипт взаимодействия с API
import './js/apiService';
import { onLogoClick } from './js/cardFetch';
import { FilmSearchByWord } from './js/searchFilms';
import refs from './js/Refs';

// пагинация
import { addPagination } from './js/pagination';
addPagination(1000, 20); // пример вызова - поместить в функции отрисовки (1000 количество найденных фильмов, 20 - количество на странице для библиотеки это 8)

// файл шаблонизатор страницы
import listCards from './templates/listCards.hbs';




// библиотека
import './js/modal/addToLibrary'
import './js/library'

// изменение фона по клику
localStorage.setItem('searched', '');

// изменение фона хедера
import { onMyLibraryClick } from './js/modal/onMyLibraryClick';


refs.myLibraryBtn.addEventListener('click', onMyLibraryClick);

refs.logoEl.addEventListener('click', onLogoClick);
refs.btnHome.addEventListener('click', onLogoClick);
refs.searchForm.addEventListener('submit', FilmSearchByWord);




