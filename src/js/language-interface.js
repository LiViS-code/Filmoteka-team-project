export function defineLanguage() {
  const language = !localStorage.getItem('languageSetting')
    ? defineLanguageUser()
    : localStorage.getItem('languageSetting');
  saveSelectLanguage(language);
  return language;
}

export function defineLanguageUser() {
  let language = window.navigator
    ? window.navigator.language || window.navigator.systemLanguage || window.navigator.userLanguage
    : 'en';
  language = language.substr(0, 2).toLowerCase();
  return language;
}

export function saveSelectLanguage(lang) {
  if (!localStorage.getItem('languageSetting')) {
    setLanguageQuery(lang);
  } else {
    setLanguageQuery(localStorage.getItem('languageSetting'));
  }
  toggleActiveBtnLanguage(lang);
}

export function setLanguageQuery(lang) {
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
  return languageQuery;
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
