import { onCardClick } from './on-card-click';
import {
  searchForm,
  headerEl,
  myLibraryBtn,
  myHomeBtn,
  searchBox,
  mainSection,
  libraryMainSection,
  warningField,
  buttonBox,
  listWatchedFilms,
} from '../refs';
import { checkWatchedFilms, PaginationForWatched, filterWatchedId } from '../library';

export function onMyLibraryClick() {
  bgImageChange('home-header', 'library-header');
  contentChange();
  PaginationForWatched();
  filterWatchedId(1);
}

function bgImageChange(oldBg, newBg) {
  localStorage.setItem('searched', '');
  searchForm.query.value = '';
  if (headerEl.classList.contains(oldBg)) {
    headerEl.classList.remove(oldBg);
  }
  headerEl.classList.add(newBg);
  contentChange();
}

function contentChange() {
  myLibraryBtn.classList.add('active');
  myHomeBtn.classList.remove('active');
  searchBox.classList.add('visually-hidden');
  mainSection.classList.add('visually-hidden');
  libraryMainSection.classList.remove('visually-hidden');
  warningField.classList.add('visually-hidden');
  buttonBox.classList.remove('visually-hidden');
  checkWatchedFilms();
  listWatchedFilms.addEventListener('click', onCardClick);
}
