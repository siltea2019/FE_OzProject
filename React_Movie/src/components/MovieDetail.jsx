import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAPI from '../hooks/useAPI';
import './MovieDetail.scss';

function MovieDetail({ setMovieListLoading }) {
  // path="/details/:movieId"
  // useParams : 콜론(:)뒤에 정의되어있는 값을 가져옴
  const params = useParams();
  const detailURL = `https://api.themoviedb.org/3/movie/${params.movieId}?language=ko`;
  // params.movieId값 가져오는지 확인
  // console.log(params.movieId);

  const apiFetchData = useAPI(detailURL, 'GET');
  const [detailData, setDetailData] = useState([]);
  const genre = detailData.genres;

  // 장르값 제대로 찍히는지 확인
  // console.log(genre);

  useEffect(() => {
    // apiFetchData.getApiData값이 truthy한 값일때 {}이후 실행
    // truthy한 경우 아래 함수를 호출하여 데이터를 저장하고 로딩상태 업데이트
    if (apiFetchData.getApiData) {
      setDetailData(apiFetchData.getApiData);
      setMovieListLoading(false); // 로딩 완료 후 false로 설정되는 부분
    }
  }, [apiFetchData, setDetailData, genre]); // apiFetchData.getApiData가 업데이트될 때만 실행

  if (!detailData) {
    // 데이터를 불러오는 동안 로딩 메시지 표시
    return <div>Loading...</div>;
  }

  // 가져오지못한 데이터를 map메서드로 확인하려해서 자꾸 에러뜸
  // const movieDetailDatas =
  //   detailData?.map((el) => ({
  //     id: el.id,
  //     title: el.title,
  //     vote_average: el.vote_average,
  //     poster_path: `https://image.tmdb.org/t/p/w500${el.poster_path}`,
  //     genres: el.genres,
  //     overview: el.overview,
  //   })) || [];

  const {
    id,
    title,
    vote_average,
    poster_path,
    backdrop_path,
    genres,
    overview,
  } = detailData;
  return (
    <>
      <main className="movie-detail-container">
        {/* 백드랍포스터 */}
        <div
          className="movie-detail-background"
          style={{
            backgroundImage: `https://image.tmdb.org/t/p/w1000${detailData.backdrop_path}`,
          }}
        ></div>
        <div className="movie-detail-content">
          {/* 상세포스터 */}
          <div className="movie-detail-poster">
            <img
              className="movie-detail-poster-img"
              src={`https://image.tmdb.org/t/p/w500${detailData.poster_path}`}
              alt={detailData.title}
            />
          </div>
          <div className="movie-detail-info" /* key={detailData.id} */>
            <div className="movie-detail-title">{detailData.title}</div>
            <div className="movie-detail-vote">
              평점 :{detailData.vote_average}
            </div>
            <div className="movie-detail-genres">
              {/* 로딩되는 중간에 map을 사용하면 error남 */}
              {/* 삼항연산자 사용 setmovieListLoading값이 true일때 로딩중화면표시 */}
              장르 :
              {setMovieListLoading ? (
                genres &&
                genre.map((el) => {
                  return <li key={el.id}>{el.name}</li>;
                })
              ) : (
                <div>로딩중...</div>
              )}
            </div>
            <div className="movie-detail-overview">{detailData.overview}</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MovieDetail;
