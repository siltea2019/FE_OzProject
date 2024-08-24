import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useAPI from '../hooks/useAPI';
import { POPULAR_API_URL } from './config';

function MovieCard({ movieList, setMovieList, setmovieListLoading }) {
  const apiFecthData = useAPI(POPULAR_API_URL, 'GET');

  useEffect(() => {
    setMovieList(apiFecthData.getApiData);
    setmovieListLoading(false);
  }, [apiFecthData, setMovieList]);

  const movieDatas =
    movieList?.results?.map((list) => ({
      id: list.id,
      title: list.title,
      poster_path: `http://image.tmdb.org/t/p/w200${list.poster_path}`,
      vote_average: list.vote_average,
    })) || [];

  // const { id, title, vote_average, poster_path, genres, overview } = detailData;

  console.log(movieList);
  console.log(movieDatas);

  return (
    <>
      {/* <ul className="movieList">
        <li>
          <Link key={movieDatas.id} to="/details">
            <div className="movieCard">
              
              <img
                className="movieCard Poster"
                src={`https://image.tmdb.org/t/p/w200${movieDatas.poster_path}`}
              />
            </div>
            <div>{movieDatas.title}</div>
            <div>{movieDatas.vote_average}</div>
          </Link>
        </li>
      </ul> */}
      <ul className="movieList">
        {movieDatas.map((card) => (
          <li key={card.id}>
            <Link key={card.id} to={`/details/${card.id}`}>
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
