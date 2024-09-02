export default function SignUp() {
  return (
    <>
      <div>
        <header>회원가입</header>
        <form>
          <fieldset>
            <input
              type="text"
              className="Id"
              title="아이디"
              placeholder="아이디를 입력해주세요"
            />
            <input
              type="email"
              className="Email"
              title="이메일"
              placeholder="이메일을 입력해주세요"
            />
          </fieldset>
          <fieldset>
            <input
              type="password"
              className="Password 1"
              title="비밀번호"
              placeholder="비밀번호를 입력해주세요"
            />
            <input
              type="password"
              className="Password 2"
              title="비밀번호확인"
              placeholder="비밀번호를 한번더 입력해주세요"
            />
          </fieldset>
          <button type="submit" className="button_join">
            회원 가입
          </button>
        </form>
      </div>
    </>
  );
}
