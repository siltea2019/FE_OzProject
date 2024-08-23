import { useState } from 'react';
import MovieDetailData from '../assets/data/movieDetailData.json';
import { useParams } from 'react-router-dom';

function MovieDetail() {
  console.log('movieDetailData', MovieDetailData, typeof MovieDetailData);

  const [detailData, setDetailData] = useState(MovieDetailData);
  /* const params = useParams();
  const details = movieDetailData[params.id]; */

  // const movieDetailDatas = MovieDetailData.map((el) => ({
  //   id: el.id,
  //   name: el.title,
  //   vote_average: el.vote_average,
  //   poster: `https://image.tmdb.org/t/p/w500${el.poster_path}`,
  //   genres: el.genres,
  //   overview: el.overview,
  // }));
  //커밋 테스트

  return (
    <>
      <main>
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
          {detailData.genres.map((el) => {
            return <li key={el.id}>{el.name}</li>;
          })}
        </div>
        <div className="movieDetail Overview">{detailData.overview}</div>
      </main>
    </>
  );
}

export default MovieDetail;
