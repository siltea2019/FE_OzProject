import { lazy, useEffect, useState } from 'react';
import './CSS/App.scss';
import { Route, Routes } from 'react-router-dom';
import MovieCard from './page/MovieCard';
import MovieDetail from './page/MovieDetail';
import NavBar from './page/NavBar';
import Login from './page/Login';
import SignUp from './page/SignUp';
import Search from './page/Search';

export default function App() {
  const [movieList, setMovieList] = useState([]);
  const [movieListLoading, setMovieListLoading] = useState(true);

  console.log(movieList);

  return (
    <>
      {<NavBar setMovieList={setMovieList} />}
      {/* Route 페이지 연결 */}
      <Routes>
        <Route
          path="/"
          element={
            <MovieCard
              movieList={movieList}
              setMovieList={setMovieList}
              movieListLoading={movieListLoading}
              setMovieListLoading={setMovieListLoading}
            />
          }
        />
        <Route
          path="/details/:movieId"
          element={
            <MovieDetail
              movieListLoading={movieListLoading}
              setMovieListLoading={setMovieListLoading}
            />
          }
        />
        <Route
          path="/Search"
          element={<Search setMovieList={setMovieList} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}
