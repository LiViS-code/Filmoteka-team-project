import { saveSelectLanguage } from './language-interface';

// сменить активную кнопку
export function onLanguageSelect(e) {
  const attr = 'data-btn-lng';
  const classActive = 'toggle-language__btn--active';
  const selectLanguage = e.target.getAttribute(attr);

  // нажата активная кнопка - ни чего не меняем
  if (e.target.classList.contains(classActive)) return;

  // сохранить выбор языка
  saveSelectLanguage(selectLanguage);

  // сменить активную кнопку
  document.querySelectorAll(`[${attr}]`).forEach(btn => {
    if (btn.classList.contains(classActive)) btn.classList.toggle(classActive);
    if (btn.getAttribute(attr) === selectLanguage) btn.classList.add(classActive);
  });

  changeLanguageInterface(selectLanguage);
}

function changeLanguageInterface(lang) {
  // alert(`меняем весь интерфейс на: ${lang}`);

  // перезагрузить страницу
  document.location.reload();
}
