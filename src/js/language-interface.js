export let languageQuery = '';

const language = !localStorage.getItem('languageSetting')
  ? defineLanguage()
  : localStorage.getItem('languageSetting');

saveSelectLanguage(language);

// определить язык барузера
export function defineLanguage() {
  let language = window.navigator
    ? window.navigator.language || window.navigator.systemLanguage || window.navigator.userLanguage
    : 'en';
  language = language.substr(0, 2).toLowerCase();
  return language;
}

// сохнаранить выбранный язык в локальном хранилище
export function saveSelectLanguage(lang) {
  if (!localStorage.getItem('languageSetting')) {
    setLanguageQuery(lang);
  } else {
    setLanguageQuery(localStorage.getItem('languageSetting'));
  }
  return setLanguageInterface(lang);
}

// установить язык для запросов на backend
function setLanguageQuery(lang) {
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
  localStorage.setItem('languageSetting', lang);
  return languageQuery;
}

export function setLanguageInterface(lang) {
  let btnActive;

  switch (lang) {
    case 'ru':
      console.log('интерфейс:', lang);
      btnActive = document.querySelector('[data-btn-lng="ru"]');
      btnActive.classList.add('toggle-language__btn--active');
      break;
    case 'ua':
      console.log('интерфейс:', lang);
      btnActive = document.querySelector('[data-btn-lng="ua"]');
      btnActive.classList.add('toggle-language__btn--active');
      break;
    default:
      console.log('интерфейс:', lang);
      btnActive = document.querySelector('[data-btn-lng="en"]');
      btnActive.classList.add('toggle-language__btn--active');
      break;
  }
  localStorage.setItem('languageSetting', lang);
}
