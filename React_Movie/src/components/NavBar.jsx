import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const headNavi = useNavigate();

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
        </div>
      </div>
    </>
  );
}
