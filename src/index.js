import './js/btn-click';
import './js/team-modal';
import './js/on-top-button';
import './sass/main.scss';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';
import './js/api-service';
import { onLogoClick } from './js/card-fetch';
import { FilmSearchByWord } from './js/search-films';
import { myLibraryBtn, logoEl, btnHome, searchForm, listElement, toggleLanguage } from './js/refs';
import './js/modal/add-to-library';
import './js/library';
import { onLanguageSelect } from './js/toggle-language';
import { onMyLibraryClick } from './js/modal/on-my-library-click';
import { onCardClick } from './js/modal/on-card-click';
import { defineLanguage } from './js/language-interface';
import { changeLanguageInterface } from './js/toggle-language';

localStorage.setItem('searched', '');

myLibraryBtn.addEventListener('click', onMyLibraryClick);
logoEl.addEventListener('click', onLogoClick);
btnHome.addEventListener('click', onLogoClick);
searchForm.addEventListener('submit', FilmSearchByWord);
toggleLanguage.addEventListener('click', onLanguageSelect);
listElement.addEventListener('click', onCardClick);
changeLanguageInterface(defineLanguage());
