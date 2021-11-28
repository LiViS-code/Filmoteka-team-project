import Pagination from 'tui-pagination';
import { paginationContainer, myLibraryBtn, searchBox } from './refs';
import { render } from './card-fetch';
import { FilmSearchByWordPagination } from './search-films';
import { filterId } from './library';

export default addPagination;

function addPagination(totalItems, itemsPerPage, page) {
  const optionPagination = {
    totalItems,
    itemsPerPage,
    visiblePages: 5,
    centerAlign: true,
    usageStatistics: false,
  };

  const pagination = new Pagination(paginationContainer, optionPagination);

  pagination.movePageTo(page);

  pagination.on('beforeMove', event => {
    const searchedFilm = localStorage.getItem('searched');
    if (searchedFilm === '' && !searchBox.classList.contains('visually-hidden')) {
      return render(event.page);
    } else if (!(searchedFilm === '') && !searchBox.classList.contains('visually-hidden')) {
      FilmSearchByWordPagination(searchedFilm, event.page);
    } else if (myLibraryBtn.classList.contains('active')) {
      filterId(event.page);
    }
  });
}
