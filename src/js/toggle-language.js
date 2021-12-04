import { saveSelectLanguage } from './language-interface';

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
}

function changeLanguageInterface(lang) {
  document.location.reload();
}
