import { saveSelectLanguage } from './language-interface';
import { onLogoClick } from './card-fetch';
import { searchField } from './refs';

export const dataForTranslation = {
  ru: 0,
  ua: 1,
  en: 2,
  filmoteka: ['Фильмотека', 'Фільмотека', 'Filmoteka'],
  home: ['Главная', 'Головна', 'Home'],
  library: ['Моя библиотека', 'Моя бібліотека', 'My library'],
  watched: ['Смотрели', 'Дивились', 'Watched'],
  queue: ['Очередь', 'Черга', 'Queue'],
  search: ['Поиск фильмов...', 'Пошук фільмів...', 'Search Movies...'],
  errorSearchMovie: [
    'Не найдено. Введите правильное название фильма и повторите попытку!',
    'Не знайдено. Введіть правильну назву фільму та повторіть спробу!',
    'Search result not successful. Enter the correct movie name and retry!',
  ],
  errorEmptySerch: ['Надо написать что-нибудь!', 'Треба написати щось!', 'Please write something!'],
  mVote: ['Голосов:', 'Голосів:', 'Vote/Votes:'],
  mPopularity: ['Популяроность:', 'Популярність:', 'Popularity:'],
  mTitle: ['Оригинальное название:', 'Оригінальна назва:', 'Original Title:'],
  mGenre: ['Жанр:', 'Жанр:', 'Genre:'],
  mAbout: ['О фильме', 'Про фільм', 'About'],
  mWatched: ['добавить к просмотренным', 'додати до переглянутого', 'add to watched'],
  mQueue: ['добавить в очередь', 'додати до черги', 'add to queue'],
};

export function onLanguageSelect(e) {
  const attr = 'data-btn-lng';
  const classActive = 'toggle-language__btn--active';
  const selectLanguage = e.target.getAttribute(attr);

  if (e.target.classList.contains(classActive)) return;

  saveSelectLanguage(selectLanguage);

  document.querySelectorAll(`[${attr}]`).forEach(btn => {
    if (btn.classList.contains(classActive)) btn.classList.toggle(classActive);
    if (btn.getAttribute(attr) === selectLanguage) btn.classList.add(classActive);
  });
  changeLanguageInterface(selectLanguage);
  onLogoClick();
}

export function changeLanguageInterface(lang) {
  const arrTranslateData = document.querySelectorAll('[data-key]');
  const langNumber = dataForTranslation[lang];
  arrTranslateData.forEach(el => {
    const key = el.getAttribute('data-key');
    el.textContent = dataForTranslation[key][langNumber];
  });
  searchField.placeholder = dataForTranslation.search[langNumber];
}
