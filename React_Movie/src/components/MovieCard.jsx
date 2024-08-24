import MovieListData from '../assets/data/movieListData.json';
import MovieDetailData from '../assets/data/movieDetailData.json';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useAPI from '../hooks/useAPI';

function MovieCard({ movieList, setMovieList, setmovieListLoading }) {
  const apiFecthData = useAPI(
    `https://api.themoviedb.org/3/movie/popular?language=ko&page=1`,
    'GET'
  );

  useEffect(() => {
    setMovieList(apiFecthData.getApiData);
    setmovieListLoading(false);
  }, [apiFecthData, setMovieList]);

  const movieData =
    movieList?.results?.map((list) => ({
      id: list.id,
      name: list.title,
      // poster: `http://image.tmdb.org/t/p/w200${list.poster_path}`,
      vote_average: list.vote_average,
    })) || [];

  console.log(movieList);
  console.log(movieData);

  return (
    <>
      {/* <ul className="movieList">
        <li>
          <Link key={movieData.id} to="/details">
            <div className="movieCard">
              
              <img
                className="movieCard Poster"
                src={`https://image.tmdb.org/t/p/w200${movieData.poster_path}`}
              />
            </div>
            <div>{movieData.title}</div>
            <div>{movieData.vote_average}</div>
          </Link>
        </li>
      </ul> */}
      <ul className="movieList">
        {movieData.map((card) => (
          <li key={card.id}>
            <Link key={card.id} to="/details">
              <div className="movieCard">
                <img
                  className="movieCard Poster"
                  src={`https://image.tmdb.org/t/p/w200${card.poster_path}`}
                />
              </div>
              <div>{card.title}</div>
              <div>{card.vote_average}</div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MovieCard;
