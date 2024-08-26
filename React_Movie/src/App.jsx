import { lazy, useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MovieCard from './components/MovieCard';
import MovieDetail from './components/MovieDetail';
import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from './components/Signup';

// 컴포넌트가 필요할때 소환하는 lazy
// const MovieCard = lazy(() => import('./components/MovieCard'));

export default function App() {
  const [movieList, setMovieList] = useState([]);
  const [movieListLoading, setmovieListLoading] = useState(true);

  console.log(movieList);

  return (
    <>
      <header className="header">
        {<NavBar setMovieList={setMovieList} />}
      </header>
      {/* Route 페이지 연결 */}
      <Routes>
        <Route
          path="/"
          element={
            <MovieCard
              movieList={movieList}
              setMovieList={setMovieList}
              movieListLoading={movieListLoading}
              setmovieListLoading={setmovieListLoading}
            />
          }
        />
        <Route
          path="/details/:movieId"
          element={
            <MovieDetail
              movieListLoading={movieListLoading}
              setmovieListLoading={setmovieListLoading}
            />
          }
        />
        <Route path="/join" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}
