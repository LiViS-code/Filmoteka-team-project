const listElement = document.querySelector('.film-cards-list-js');
const logoEl = document.querySelector('.logo-js');
const btnHome = document.querySelector('.nav__btn-js');
const searchForm = document.querySelector('#search-form');
const warningField = document.querySelector('.warning-message');

const myLibraryBtn = document.querySelector('[data-action="my-library-rendering"]');
const myHomeBtn = document.querySelector('[data-action="home-page-rendering"]');
const headerEl = document.querySelector('header');
const searchBox = document.getElementById('search-box');
const mainSection = document.querySelector('.main-container');
const libraryMainSection = document.querySelector('.library-main');
const queueBtn = document.getElementById('js-queue-btn');
const watchedBtn = document.getElementById('js-watched-btn');
const buttonBox = document.querySelector('.button-box');

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
};
