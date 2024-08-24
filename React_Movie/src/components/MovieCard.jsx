import MovieListData from '../assets/data/movieListData.json';
import MovieDetailData from '../assets/data/movieDetailData.json';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function MovieCard({ movieList /* setMovieList */ }) {
  console.log(movieList);

  /* const movieData = movieList.results.map((list) => ({
    id: list.id,
    name: list.title,
    poster: `https://image.tmdb.org/t/p/w200${list.poster_path}`,
    vote_average: list.vote_average,
  }));

  console.log(movieData); */

  return (
    <ul className="movieList">
      {MovieListData.results.map((card) => (
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
  );
}

export default MovieCard;
