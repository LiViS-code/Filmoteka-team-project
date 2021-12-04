const BASE_URL = `https://api.themoviedb.org/3`;
const KEY = `b7df999202e1c3618d01db23ce0076f0`;

export default class NewApiService {
  constructor() {
    this.searchQuery = '';
    this.pageNum;
    this.total_pages;
    this.total_results;
    this.language = 'en-US';
  }

  fetchPopularFilms() {
    const url = `${BASE_URL}/movie/popular?api_key=${KEY}&language=${this.language}&page=${this.page}`;
    return fetch(url)
      .then(response => response.json())
      .then(data => data)
      .catch(err => console.log('ошибка:', err));
  }

  fetchSearchFilms() {
    const url = `${BASE_URL}/search/movie?api_key=${KEY}&language=${this.language}&page=${this.page}&query=${this.searchQuery}`;
    return fetch(url)
      .then(response => response.json())
      .then(data => data)
      .catch(err => console.log('ошибка:', err));
  }

  fetchGenres() {
    const url = `${BASE_URL}/genre/movie/list?api_key=${KEY}`;
    return fetch(url)
      .then(response => response.json())
      .then(data => data.genres)
      .catch(err => console.log('ошибка:', err));
  }

  fetchId(id) {
    const url = `${BASE_URL}/movie/${id}?api_key=${KEY}&language=${this.language}`;
    return fetch(url)
      .then(response => response.json())
      .then(data => data)
      .catch(err => console.log('ошибка:', err));
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get page() {
    return this.pageNum;
  }

  set page(newPage) {
    this.pageNum = newPage;
  }

  get totalPages() {
    return this.total_pages;
  }

  get languagePage() {
    return this.language;
  }

  set languagePage(lng) {
    this.language = lng;
  }
}
