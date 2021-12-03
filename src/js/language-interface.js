export let languageQuery = '';

defineLanguage();
saveSelectLanguage();

// определить язык барузера
export function defineLanguage() {
  let language = window.navigator
    ? window.navigator.language || window.navigator.systemLanguage || window.navigator.userLanguage
    : 'en';
  language = language.substr(0, 2).toLowerCase();
  return language;
}

// сохнаранить выбранный язык в локальном хранилище
function saveSelectLanguage() {
  if (!localStorage.getItem('languageSetting')) return setLanguageQuery(defineLanguage());
  return setLanguageQuery(localStorage.getItem('languageSetting'));
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
