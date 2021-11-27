import refs from '../Refs';
import { checkWatchedFilms, ckechQueueFilms, PaginationForWatched } from '../library';
export function onMyLibraryClick() {
  bgImageChange('home-header', 'library-header');
  contentChange();
  PaginationForWatched();
}

function bgImageChange(oldBg, newBg) {
  localStorage.setItem('searched', '');
  refs.searchForm.query.value = '';
  if (refs.headerEl.classList.contains(oldBg)) {
    refs.headerEl.classList.remove(oldBg);
  }
  refs.headerEl.classList.add(newBg);
  contentChange();
}

function contentChange() {
  refs.myLibraryBtn.classList.add('active');
  refs.myHomeBtn.classList.remove('active');
  refs.searchBox.classList.add('visually-hidden');
  refs.mainSection.classList.add('visually-hidden');
  refs.libraryMainSection.classList.remove('visually-hidden');
  refs.warningField.classList.add('visually-hidden');
  refs.buttonBox.classList.remove('visually-hidden');
  checkWatchedFilms();
}
