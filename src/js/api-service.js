const BASE_URL = `https://api.themoviedb.org/3`;
const KEY = `b7df999202e1c3618d01db23ce0076f0`;
export default class NewApiService {
  constructor() {
    this.searchQuery = '';
    this.pageNum;
    this.total_pages;
    this.total_results;
  }
  //запрос за популярными Вывод количества найденных страниц!!!

  fetchPopularFilms() {
    const url = `${BASE_URL}/movie/popular?api_key=${KEY}&language=en-US&page=${this.page}`;
    return fetch(url)
      .then(response => response.json())
      .then(data => data)
      .catch(err => console.log('ошибка:', err));
  }
  //запрос по поиску

  fetchSearchFilms() {
    const url = `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&page=${this.page}&query=${this.searchQuery}`;
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
    const url = `${BASE_URL}/movie/${id}?api_key=${KEY}&language=en-US`;
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
    return (this.pageNum = newPage);
  }
  get totalPages() {
    return this.total_pages;
  }
}
