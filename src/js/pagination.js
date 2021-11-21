import Pagination from 'tui-pagination';
import refs from './Refs';
import NewApiService from './apiService';
import { fetchPopularFilmsByPage } from './cardFetch';

const optionPagination = {
  totalItems: 500,
  itemsPerPage: 15,
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

refs.paginationContainer.addEventListener('click', () => {
  const selectPage = pagination.getCurrentPage();

  console.log('Выбрана страница:', selectPage); // удалить после отладки

  // послать запрос в бекенд с номером страницы
console.log('Выбрана страница:',fetchPopularFilmsByPage(3));
  // NewApiService.pageNum(3);
});
// console.log('Выбрана страница:',fetchPopularFilmsByPage(3));
