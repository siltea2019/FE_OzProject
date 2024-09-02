export default function Login() {
  return (
    <>
      <div>
        <header>로그인</header>
        <form>
          <fieldset>
            <input
              type="email"
              className="Email"
              title="이메일"
              placeholder="이메일을 입력해주세요"
            />
            <input
              type="password"
              className="Passowrd 1"
              title="비밀번호"
              placeholder="비밀번호를 입력해주세요"
            />
          </fieldset>
          <button type="submit" className="button_login">
            로그인
          </button>
        </form>
      </div>
    </>
  );
}
