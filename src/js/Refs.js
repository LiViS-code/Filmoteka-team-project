const listElement = document.querySelector('.film-cards-list-js');
const logoEl = document.querySelector('.logo-js');
const btnHome = document.querySelector('.nav__btn-js');
const searchForm = document.querySelector('#search-form');
const warningField = document.querySelector('.warning-message');
const searchField = document.querySelector('.search-field')
const myLibraryBtn = document.querySelector('[data-action="my-library-rendering"]');
const myHomeBtn = document.querySelector('[data-action="home-page-rendering"]');
const headerEl = document.querySelector('header');
const searchBox = document.getElementById('search-box');
const mainSection = document.querySelector('.main-container');
const libraryMainSection = document.querySelector('.library-main');
const queueBtn = document.getElementById('js-queue-btn');
const watchedBtn = document.getElementById('js-watched-btn');
const buttonBox = document.querySelector('.button-box');
const paginationContainer = document.getElementById('tui-pagination-container');
const addToWatchedBtn = document.getElementById('watched');
const addToQueuedBtn = document.getElementById('queued');
const listWatchedFilms = document.querySelector('.film-cards-list-watched-js');
const listQueuedFilms = document.querySelector('.film-cards-list-queue-js');
const cardFilm = document.querySelector('.card__film[data-action]');
const spinner = document.querySelector('.square');
const modalContainer = document.querySelector('#modalContainer');
const modalButtonClose = document.querySelector('.modal-button-close-js');
const modalWindowContent = document.querySelector('.modal-window-content');
const modalContainerEl = document.querySelector('#modalContainer');


export default {
  listElement,
  logoEl,
  btnHome,
  searchForm,
  warningField,
  myLibraryBtn,
  myHomeBtn,
  headerEl,
  searchBox,
  mainSection,
  libraryMainSection,
  queueBtn,
  watchedBtn,
  buttonBox,
  paginationContainer,
  searchField,
  addToWatchedBtn,
  addToQueuedBtn,
  listWatchedFilms,
  listQueuedFilms,
  cardFilm,
  spinner,
  modalContainer,
  modalButtonClose,
  modalWindowContent,
  modalContainerEl
};
