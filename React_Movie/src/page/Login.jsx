// 카카오 예제 https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}

// KAKAO_AUTH_URI = `${KAKAO_AUTH_BASE_URL}?client_id=${KAKAO_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

import { KAKAO_AUTH_URI } from '../utils/constants';

const Login = () => {
  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URI;
  };

  return (
    <>
      <div>
        <header>카카오 로그인</header>

        <button className="button_login" onClick={handleKakaoLogin}>
          카카오 로그인
        </button>
      </div>
    </>
  );
};

export default Login;
