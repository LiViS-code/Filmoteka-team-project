import refs from './Refs';

refs.myHomeBtn.addEventListener('click', onMyHomeClick);

function onMyHomeClick() {
  bgImageChange('home-header', 'library-header');
}

function bgImageChange(newBg, oldBg) {
  if (refs.headerEl.classList.contains(oldBg)) {
    console.log('contains!');
    refs.headerEl.classList.remove(oldBg);
  }
  refs.headerEl.classList.add(newBg);
  refs.myHomeBtn.classList.add('active');
  refs.myLibraryBtn.classList.remove('active');
  refs.buttonBox.classList.add('visually-hidden');
  refs.mainSection.classList.remove('visually-hidden');
  refs.libraryMainSection.classList.add('visually-hidden');
  refs.warningField.classList.remove('visually-hidden');
}
