// основной скрипт
import './js/btn-click';
import './js/team-modal';
import './team.json';
// файл стилей
import './sass/main.scss';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';

// скрипт взаимодействия с API
import './js/api-service';
import { onLogoClick } from './js/card-fetch';
import { FilmSearchByWord } from './js/search-films';
import refs from './js/refs';

// библиотека
import './js/modal/add-to-library';
import './js/library';

// изменение фона по клику
localStorage.setItem('searched', '');

// изменение фона хедера
import { onMyLibraryClick } from './js/modal/on-my-library-click';
import { onCardClick } from './js/modal/on-card-click';

refs.myLibraryBtn.addEventListener('click', onMyLibraryClick);

refs.logoEl.addEventListener('click', onLogoClick);
refs.btnHome.addEventListener('click', onLogoClick);
refs.searchForm.addEventListener('submit', FilmSearchByWord);

// для модального окна
refs.listElement.addEventListener('click', onCardClick);
