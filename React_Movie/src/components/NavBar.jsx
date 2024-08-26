import { useNavigate } from 'react-router-dom';
import Search from './Search';

<<<<<<< HEAD
export default function NavBar({ setMovieList }) {
  const headerNav = useNavigate();
=======
export default function NavBar() {
  const headNavi = useNavigate();
>>>>>>> parent of 590bfaa (3단계_useDebounce훅생성,한글검색npm설치,NavBar검색어부분추가)

  return (
    <>
      <div className="header_Buttons">
        <div
          className="header_Buttons Logo"
          alt="메인페이지"
          onClick={() => headNavi('/')}
        >
          Suving
        </div>
<<<<<<< HEAD
        <div>
          <span>{<Search setMovieList={setMovieList} />}</span>
=======
        <div className="header_Buttons">
          <button className="header_Buttons Setting" alt="다크모드설정">
            다크모드설정
          </button>
          <button
            className="header_Buttons Login"
            alt="로그인"
            onClick={() => headNavi('/join')}
          >
            로그인
          </button>
          <button
            className="header_Buttons Join"
            alt="회원가입"
            onClick={() => headNavi('/signup')}
          >
            회원가입
          </button>
>>>>>>> parent of 590bfaa (3단계_useDebounce훅생성,한글검색npm설치,NavBar검색어부분추가)
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
