export let language = window.navigator
  ? window.navigator.language || window.navigator.systemLanguage || window.navigator.userLanguage
  : 'en';
language = language.substr(0, 2).toLowerCase();

// язык для запросов на backend
export let languageQuery = '';

switch (language) {
  case 'ru':
    languageQuery = 'ru-RU';
    break;
  case 'ua':
    languageQuery = 'uk-UA';
    break;
  default:
    languageQuery = 'en-US';
}

console.log(language);
