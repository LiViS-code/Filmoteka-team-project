import { vocabulary } from './vocabulary';
import { searchField } from '../refs';
import { onLogoClick } from '../card-fetch';

export function setLanguageInterface() {
  const languageDocument = defineLanguage();
  setLanguageQuery(languageDocument);
  toggleActiveBtnLanguage(languageDocument);
  changeLanguageInterface(languageDocument);
}

export function onLanguageSelect(e) {
  const attr = 'data-btn-lng';
  const classActive = 'toggle-language__btn--active';
  const selectLanguage = e.target.getAttribute(attr);

  if (e.target.classList.contains(classActive)) return;

  localStorage.setItem('languageSetting', selectLanguage);
  setLanguageQuery(selectLanguage);

  document.querySelectorAll(`[${attr}]`).forEach(btn => {
    if (btn.classList.contains(classActive)) btn.classList.toggle(classActive);
    if (btn.getAttribute(attr) === selectLanguage) btn.classList.add(classActive);
  });
  changeLanguageInterface(selectLanguage);
}

export function defineLanguage() {
  // function to determine the selected language module
  const language = !localStorage.getItem('languageSetting')
    ? defineLanguageNavigator()
    : localStorage.getItem('languageSetting');
  return language;
}

export function defineLanguageNavigator() {
  // determines the installed language in the user's browser
  let language = window.navigator
    ? window.navigator.language || window.navigator.systemLanguage || window.navigator.userLanguage
    : 'en';
  language = language.substr(0, 2).toLowerCase();
  return language;
}

export function languageQuery() {
  // language request for backend
  if (!localStorage.getItem('languageSetting')) {
    setLanguageQuery(defineLanguage());
  } else {
    setLanguageQuery(localStorage.getItem('languageSetting'));
  }
}

function setLanguageQuery(lang) {
  let languageQuery = '';
  switch (lang) {
    case 'ru':
      languageQuery = 'ru-RU';
      break;
    case 'ua':
      languageQuery = 'uk-UA';
      break;
    default:
      languageQuery = 'en-US';
  }
  localStorage.setItem('languageQuery', languageQuery);
}

export function toggleActiveBtnLanguage(lang) {
  let btnActive;

  switch (lang) {
    case 'ru':
      btnActive = document.querySelector('[data-btn-lng="ru"]');
      break;
    case 'ua':
      btnActive = document.querySelector('[data-btn-lng="ua"]');
      break;
    default:
      btnActive = document.querySelector('[data-btn-lng="en"]');
  }
  btnActive.classList.add('toggle-language__btn--active');
  localStorage.setItem('languageSetting', lang);
}

export function changeLanguageInterface(lang) {
  const arrTranslateData = document.querySelectorAll('[data-key]');
  const langNumber = vocabulary[lang];
  arrTranslateData.forEach(el => {
    const key = el.getAttribute('data-key');
    el.textContent = vocabulary[key][langNumber];
  });
  searchField.placeholder = vocabulary.search[langNumber];
  onLogoClick();
}
