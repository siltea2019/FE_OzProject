import { useEffect, useState } from 'react';
import { Route, useLocation, useParams } from 'react-router-dom';
import useAPI from '../hooks/useAPI';
import { MOVIE_URL } from './config';

function MovieDetail({ setmovieListLoading }) {
  // path="/details/:movieId"
  // useParams : 콜론(:)뒤에 정의되어있는 값을 가져옴
  const params = useParams();
  const detailURL = `https://api.themoviedb.org/3/movie/${params.movieId}?language=ko`;
  console.log(params.movieId);

  const apiFecthData = useAPI(detailURL, 'GET');

  console.log(apiFecthData.getApiData);

  const [detailData, setDetailData] = useState([]);

  const genre = detailData.genres;

  console.log(genre);

  useEffect(() => {
    if (apiFecthData.getApiData) {
      setDetailData(apiFecthData.getApiData);
      setmovieListLoading(false); // 로딩 완료 후 false로 설정
    }
  }, [apiFecthData, setDetailData, genre]); // apiFecthData.getApiData가 업데이트될 때만 실행

  // useEffect(() => {
  //   setDetailData(apiFecthData.getApiData);
  //   setmovieListLoading(false);
  // }, [apiFecthData, setDetailData]);

  if (!detailData) {
    // 데이터를 불러오는 동안 로딩 메시지 표시
    return <div>Loading...</div>;
  }

  // const movieDetailDatas =
  //   detailData?.map((el) => ({
  //     id: el.id,
  //     title: el.title,
  //     vote_average: el.vote_average,
  //     poster_path: `https://image.tmdb.org/t/p/w500${el.poster_path}`,
  //     genres: el.genres,
  //     overview: el.overview,
  //   })) || [];

  const { id, title, vote_average, poster_path, genres, overview } = detailData;

  console.log(genre);

  return (
    <>
      <main>
        <div>영화 상세 정보</div>
        {/* 백드랍포스터 */}
        <div className="movieDetail">
          <img
            className="movieDetail Poster"
            src={`https://image.tmdb.org/t/p/w500${detailData.poster_path}`}
          />
        </div>
        <div key={detailData.id}></div>
        <div className="movieDetail Title">{detailData.title}</div>
        <div className="movieDetail Vote">{detailData.vote_average}</div>
        <div className="movieDetail Genres">
          {/* 로딩되는 중간에 map을 사용하면 error남 */}
          {/* 삼항연산자 사용 setmovieListLoading값이 true일때 로딩중화면표시 */}
          {setmovieListLoading ? (
            genres &&
            genre.map((el) => {
              return <li key={el.id}>{el.name}</li>;
            })
          ) : (
            <div>로딩중...</div>
          )}
        </div>
        <div className="movieDetail Overview">{detailData.overview}</div>
      </main>
    </>
  );
}

export default MovieDetail;
