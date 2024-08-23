import { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MovieListData from './assets/data/movieListData.json';
// import MovieDetailData from './assets/data/movieDetailData.json';
import MovieCard from './components/MovieCard';
import MovieDetail from './components/MovieDetail';
import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from './components/Signup';
import useAPI from './hooks/useAPI';

const KEY = import.meta.env.VITE_API_KEY;
const TOKEN = import.meta.env.VITE_API_TOKEN;

function App() {
  const [movieList, setMovieList] = useState();
  const [movieListLoading, setmovieListLoading] = useState(true);

  function useAPI(url, CRUD) {
    // 데이터 상태를 보내주는 상태
    const [getApiData, setGetApiData] = useState();
    // 데이터 로딩을 기다릴 상태
    const [apiLoading, setApiLoading] = useState(true);

    //useState를 사용하는 이유 : 상태함수를 이용하여 상태를 관리하고 상태값에 데이터를 저장하기 위해

    const options = {
      method: CRUD,
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${TOKEN}`,
      },
    };

    // 마운트 될때만 불러오겠다 => Hook개념확인필요
    useEffect(() => {
      const fetchAPI = async () => {
        const response = await fetch(url, options);
        const apiData = await response.json();

        setGetApiData(apiData);
        setApiLoading(false);
      };
      fetchAPI();
    }, [movieList, setMovieList]);

    return { getApiData, apiLoading };
  }

  console.log('movieList 확인로그', movieList);

  const apiData = useAPI(
    `https://api.themoviedb.org/3/movie/popular?language=ko&page=1`,
    'GET'
  );

  console.log(apiData.apiLoading);
  console.log(apiData.getApiData);

  return (
    <>
      <header className="header">{<NavBar />}</header>
      {/* Route 페이지 연결 */}
      <Routes>
        <Route
          path="/"
          element={
            <MovieCard movieList={movieList} setMovieList={movieListLoading} />
          }
        />
        <Route path="/details" element={<MovieDetail />} />
        <Route path="/join" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
