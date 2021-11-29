// основной скрипт
import './js/btn-click';
import './js/team-modal';
import './js/on-top-button';
// файл стилей
import './sass/main.scss';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';

// скрипт взаимодействия с API
import './js/api-service';
import { onLogoClick } from './js/card-fetch';
import { FilmSearchByWord } from './js/search-films';
import { myLibraryBtn, logoEl, btnHome, searchForm, listElement } from './js/refs';

// библиотека
import './js/modal/add-to-library';
import './js/library';

// изменение фона по клику
localStorage.setItem('searched', '');

// изменение фона хедера
import { onMyLibraryClick } from './js/modal/on-my-library-click';
import { onCardClick } from './js/modal/on-card-click';

myLibraryBtn.addEventListener('click', onMyLibraryClick);

logoEl.addEventListener('click', onLogoClick);
btnHome.addEventListener('click', onLogoClick);
searchForm.addEventListener('submit', FilmSearchByWord);

// для модального окна
listElement.addEventListener('click', onCardClick);
