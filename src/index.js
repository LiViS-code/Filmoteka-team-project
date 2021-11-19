// основной скрипт

// файл стилей
import './sass/main.scss';

// скрипт взаимодействия с API
import './js/apiSrevice';

// файл шаблонизатор страницы
import listCards from './templates/listCards.hbs';

// спиннер
import { Spinner } from 'spin.js';

import { allFilms } from './js/all-films';

console.log(allFilms(1));

