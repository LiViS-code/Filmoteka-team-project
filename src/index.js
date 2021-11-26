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
// import { resetSearchField } from './js/searchFilms';
import refs from './js/Refs';

// библиотека
import './js/modal/addToLibrary';
import './js/library';

// изменение фона по клику
localStorage.setItem('searched', '');

// изменение фона хедера
import { onMyLibraryClick } from './js/modal/onMyLibraryClick';
// import { toggleModal } from './js/modal/toggleModal';
import { onCardClick } from './js/modal/onCardClick';

refs.myLibraryBtn.addEventListener('click', onMyLibraryClick);

refs.logoEl.addEventListener('click', onLogoClick);
refs.btnHome.addEventListener('click', onLogoClick);
refs.searchForm.addEventListener('submit', FilmSearchByWord);

// для модального окна
refs.listElement.addEventListener('click', onCardClick);
