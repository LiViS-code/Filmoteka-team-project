import Pagination from 'tui-pagination';
import refs from './Refs';
import { render } from './cardFetch';
import { FilmSearchByWordPagination } from './searchFilms';

export function addPagination(totalItems, itemsPerPage, page) {
  const optionPagination = {
    totalItems,
    itemsPerPage,
    visiblePages: 5,
    centerAlign: true,
    usageStatistics: false,
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  const pagination = new Pagination(refs.paginationContainer, optionPagination);

  pagination.movePageTo(page);

  refs.paginationContainer.addEventListener('click', listenerPagination);
  console.log('вызвали пагинацию');

  function listenerPagination() {
    console.log('сработал слушатель');
    const selectPage = pagination.getCurrentPage();
    const searchedFilm = localStorage.getItem('searched');
    console.log('запрос:', searchedFilm);

    if (searchedFilm === '') {
      refs.paginationContainer.removeEventListener('click', listenerPagination);
      console.log('снял слушателя внутри if');
      return render(selectPage);
    }

    refs.paginationContainer.removeEventListener('click', listenerPagination);
    console.log('снял слушателя');

    FilmSearchByWordPagination(searchedFilm, selectPage);
  }
}
