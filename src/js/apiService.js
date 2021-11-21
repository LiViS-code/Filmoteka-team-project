// API key: b7df999202e1c3618d01db23ce0076f0
// example API request: https://api.themoviedb.org/3/movie/550?api_key=b7df999202e1c3618d01db23ce0076f0
//

// console.log('подключен файл для взаимодействия с API');
const BASE_URL = `https://api.themoviedb.org/3`;
const KEY = `b7df999202e1c3618d01db23ce0076f0`;
export default class NewApiService {
  constructor() {
    this.searchQuery = '';
    this.page;
    this.total_pages;
  }
 //запрос за популярными Вывод количества найденных страниц!!!

  fetchPopularFilms() {
    const url = `${BASE_URL}/movie/popular?api_key=${KEY}&language=en-US&page=${this.page}`;
    return fetch(url)
      .then(response => response.json())
      .then(({ results, total_pages }) => {
        // console.log(total_pages);
        return results;
      });
  }
   //запрос по поиску
  
  fetchSearchFilms() {
    const url = `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&page=${this.page}&query=${this.searchQuery}`;
    return fetch(url)
      .then(response => response.json())
      .then(({ results, total_pages}) => {
        //  console.log(total_pages);
         return results;
      });
  }
  //запрос за жанрами 

  fetchGenres() {
    const url = `${BASE_URL}/genre/movie/list?api_key=${KEY}`;
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        return data.genres;
      });
  }
    //добавляем жанры на статику
  
  addGenresToMovieObj() {
    return this.fetchPopularFilms().then(data => {
      return this.fetchGenres().then(genresList => {
        return data.map(movie => ({
          ...movie,
          release_date: movie.release_date.split('-')[0],
          genres: movie.genre_ids
            .map(id => genresList.filter(el => el.id === id))
            .flat(),
        }));
      });
    });
  }

  //добавляем жанры на поиск

  addGenresToSearchObj() {
    return this.fetchSearchFilms().then(data => {
      return this.fetchGenres().then(genresList => {
        return data.map(movie => ({
          ...movie,
          release_date: movie.release_date
            ? movie.release_date.split('-')[0]
            : 'n/a',
          genres: movie.genre_ids
            ? movie.genre_ids
                .map(id => genresList.filter(el => el.id === id))
                .flat()
            : 'n/a',
        }));
      });
    });
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
  get pageNum() {
    return this.page;
  }
  set pageNum(newPage) {
    this.page = newPage;
  }
  get totalPages() {
    return this.total_pages;
  }
}

