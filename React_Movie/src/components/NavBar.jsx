import { useNavigate } from 'react-router-dom';
import Search from './Search';

export default function NavBar({ setMovieList }) {
  const headerNav = useNavigate();

  return (
    <>
      <div className="header_Buttons">
        <div
          className="header_Buttons Logo"
          alt="메인페이지"
          onClick={() => headerNav('/')}
        >
          Suving
        </div>
        <div className="header_Buttons Search" alt="검색페이지">
          <button
            className="header_Buttons Search"
            alt="검색"
            onClick={() => headerNav('/Search')}
          >
            🔍
          </button>
        </div>

        <button className="header_Buttons Setting" alt="다크모드설정">
          다크모드
        </button>
        <button
          className="header_Buttons Login"
          alt="로그인"
          onClick={() => headerNav('/join')}
        >
          로그인
        </button>
        <button
          className="header_Buttons Join"
          alt="회원가입"
          onClick={() => headerNav('/signup')}
        >
          회원가입
        </button>
      </div>
    </>
  );
}
