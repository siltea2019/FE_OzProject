import { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MovieCard from './components/MovieCard';
import MovieDetail from './components/MovieDetail';
import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from './components/Signup';
import useAPI from './hooks/useAPI';

export default function App() {
  const [movieList, setMovieList] = useState([]);
  const [movieListLoading, setmovieListLoading] = useState(true);

  const apiFecthData = useAPI(
    `https://api.themoviedb.org/3/movie/popular?language=ko&page=1`,
    'GET'
  );

  useEffect(() => {
    setMovieList(apiFecthData.getApiData);
    setmovieListLoading(apiFecthData.apiLoading);
  }, [apiFecthData]);

  // console.log(listdata);
  // console.log(boolian);

  return (
    <>
      <header className="header">{<NavBar />}</header>
      {/* Route 페이지 연결 */}
      <Routes>
        <Route
          path="/"
          element={
            <MovieCard
              movieList={movieList} /* setMovieList={setMovieList} */
            />
          }
        />
        <Route path="/details" element={<MovieDetail />} />
        <Route path="/join" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}
