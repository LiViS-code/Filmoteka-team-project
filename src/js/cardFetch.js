import filmsCardTpl from '../templates/filmCard.hbs';
import NewApiService from './apiService';
import refs from './Refs';
import '../sass/main.scss';
import search from './spinner';
import { addPagination } from './pagination';

const newApiService = new NewApiService();

const numFirstPage = 1;
 

render(numFirstPage);

//добавляем жанры на статику
function addGenresToMovieObj() {
  return newApiService
    .fetchPopularFilms()
    .then(data => {
      addPagination(data.total_results, 20, newApiService.page);
      return data;
    })
    .then(data => data.results)
    .then(data => {
      return newApiService.fetchGenres().then(genresList => {
        return data.map(movie => ({
          ...movie,
          release_date: movie.release_date.split('-')[0],
          genres: movie.genre_ids.map(id => genresList.filter(el => el.id === id)).flat(),
        }));
      });
    });
}

// рендер популярних фильмов по клику на лого
export function onLogoClick(e) {
  e.preventDefault();
  search.spinner.show();
  newPlaceholder();
  resetSearchField();
  localStorage.setItem('searched', '');
  bgImageChangeMain('home-header', 'library-header');
  refs.warningField.textContent = '';
  render(1);
  search.spinner.close();
  refs.paginationContainer.classList.remove('visually-hidden');
}

export function render(numPage) {
  newApiService.pageNum = numPage;
  search.spinner.show();
   scrollWin();
  addGenresToMovieObj()
    .then(renderFilmsCard)
    .then(data => {
     removeVoteByCard()
    })
    .catch(err => {
      console.log('error in function render', err);
    });
   search.spinner.close();
}

function renderFilmsCard(articles) {
  refs.listElement.innerHTML = filmsCardTpl(articles);
}

export function fetchPopularFilmsByPage(page) { 
  newApiService.pageNum = page;
  return addGenresToMovieObj();
}

function bgImageChangeMain(oldBg, newBg) {
  if (refs.headerEl.classList.contains(newBg)) {
    console.log('contains!');
    refs.headerEl.classList.remove(newBg);
  }
  refs.headerEl.classList.add(oldBg);
  refs.myLibraryBtn.classList.remove('active');
  refs.myHomeBtn.classList.add('active');
  refs.searchBox.classList.remove('visually-hidden');
  refs.mainSection.classList.remove('visually-hidden');
  refs.libraryMainSection.classList.add('visually-hidden');
  refs.warningField.classList.remove('visually-hidden');
  refs.buttonBox.classList.add('visually-hidden');
}
export function scrollWin() {
  window.scrollTo({
    top: 0,
    belavior: 'smooth',
  });
}
function newPlaceholder() {
  let el= document.getElementById("search-field");
  el.placeholder= "Popular";
};
export function resetSearchField() {
  refs.searchField.value = '';
};
export function removeVoteByCard() {
  const voteEl = document.getElementById('card__vote_average');
  voteEl.classList.add('visually-hidden');
}
