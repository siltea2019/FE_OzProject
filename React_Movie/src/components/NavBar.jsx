import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const [inputValue, setInputValue] = useState('');
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
        <div className="header_Buttons">
          <input
            type="text"
            className="header_Buttons Input"
            placeholder="검색어를 입력해주세요"
            title="검색어"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              headerNav(`/search?movie=${inputValue}`);
            }}
          />
          <button
            className="header_Buttons Search"
            alt="검색"
            onClick={() => headerNav(`/search?movie=${inputValue}`)}
          >
            🔍
          </button>

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
      </div>
    </>
  );
}
