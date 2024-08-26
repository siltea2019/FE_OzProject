// 중복주소 상수로 설정하기

/* API url */
const API_URL = 'https://api.themoviedb.org/3/';

/* movie */
const MOVIE_URL = `${API_URL}movie`;

/* pupular */
const POPULAR_API_URL = `${API_URL}movie/popular`;
// https://api.themoviedb.org/3/movie/popular?language=en-US&page=1

/* search */
const SEARCH_URL = `${API_URL}search/movie?query=`;
/* https://api.themoviedb.org/3/search/movie?query=%EC%9D%B8&include_adult=true&language=ko&page=1 */

/* 이미지 url */
const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
// https://api.themoviedb.org/3/collection/{collection_id}/images

const CONFIG_API_KEY = import.meta.env.VITE_API_KEY;
const CONFIG_API_TOKEN = import.meta.env.VITE_API_TOKEN;

/* export 해서 내보내는 것 잊지마세요! */
export {
  API_URL,
  MOVIE_URL,
  SEARCH_URL,
  POPULAR_API_URL,
  IMAGE_BASE_URL,
  CONFIG_API_KEY,
  CONFIG_API_TOKEN,
};
