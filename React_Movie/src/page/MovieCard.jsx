import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useAPI from '../hooks/useAPI';
import { POPULAR_API_URL } from '../assets/data/config';
import '../CSS/MovieCard.scss';

function MovieCard({ movieList, setMovieList, setMovieListLoading }) {
  const listURL = `${POPULAR_API_URL}?language=ko`;
  const { token, setToken } = useState(null);

  const apiFetchData = useAPI(listURL, 'GET');

  useEffect(() => {
    setMovieList(apiFetchData.getApiData);
    setMovieListLoading(false);
  }, [apiFetchData, setMovieList, setMovieListLoading]);

  const movieData =
    movieList?.results?.map((list) => ({
      id: list.id,
      title: list.title,
      poster_path: `http://image.tmdb.org/t/p/w200${list.poster_path}`,
      vote_average: list.vote_average,
    })) || [];

  // 틀린코드 같은데 왜 적용이 안되는지 확인해보고 공부
  // const { id, title, vote_average, poster_path, genres, overview } = detailData;

  // 로그인은 되고 토큰도 정상적으로 저장이 되지만 로그인상태관리가 필요함
  // useEffect(() => {
  //   const tokenString = localStorage.getItem('KakaoToken');
  //   if (tokenString) {
  //     const parsedToken = JSON.parse(tokenString);
  //     setToken(parsedToken);
  //   }
  // }, []);

  return (
    <>
      <ul className="movieList ">
        {movieData.map((card) => (
          <li className="card " key={card.id}>
            <Link key={card.id} to={`/details/${card.id}`}>
              <img
                className="poster"
                src={`https://image.tmdb.org/t/p/w200${card.poster_path}`}
              />
              <div className="info">
                <div className="title">{card.title}</div>
                <div className="vote">{card.vote_average}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MovieCard;
