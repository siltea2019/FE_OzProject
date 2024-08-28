import { lazy, useEffect, useState } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import MovieCard from './components/MovieCard';
import MovieDetail from './components/MovieDetail';
import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Search from './components/Search';

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
