import { KEY, BASEURL } from './data-api';

export async function allFilms(page) {
  const URLgenres = `${BASEURL}/genre/movie/list?api_key=${KEY}`;
  const URLtrends = `${BASEURL}/trending/all/day?api_key=${KEY}&page=${page}`;

  const fetchGenres = await fetch(URLgenres);
  const respGenres = await fetchGenres.json();
  const { genres } = respGenres;

  const fetchUrl = await fetch(URLtrends);
  const response = await fetchUrl.json();
  const { trends } = response;
  return {
    films: trends,
    genres,
  };
}
