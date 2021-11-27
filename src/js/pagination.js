import Pagination from 'tui-pagination';
import { paginationContainer } from './refs';
import { render } from './card-fetch';
import { FilmSearchByWordPagination } from './search-films';

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
    if (searchedFilm === '') return render(event.page);
    return FilmSearchByWordPagination(searchedFilm, event.page);
  });
}
