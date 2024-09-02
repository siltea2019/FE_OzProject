import { useNavigate } from 'react-router-dom';
import Search from './Search';
import '../CSS/NavBar.scss';

export default function NavBar({ setMovieList }) {
  const headerNav = useNavigate();

  return (
    <>
      <div className="navbar">
        <div
          className="navbar-logo"
          alt="메인페이지"
          onClick={() => headerNav('/')}
        >
          Suving
        </div>
        <div className="navbar-actions" alt="검색페이지">
          <button
            className="navbar-button search"
            alt="검색"
            onClick={() => headerNav('/Search')}
          >
            🔍
          </button>
          <button className="navbar-button setting" alt="다크모드설정">
            다크모드
          </button>
          <button
            className="navbar-button login"
            alt="로그인"
            onClick={() => headerNav('/login')}
          >
            로그인
          </button>
          <button
            className="navbar-button signup"
            alt="회원가입"
            onClick={() => headerNav('/signup')}
          >
            회원가입
          </button>
        </div>
      </div>
    </>
  );
}
