import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useDebounce from '../hooks/useDebounce';
import { SEARCH_URL } from './config';
import useAPI from '../hooks/useAPI';

export default function Search() {
  const [seearchList, setSearchList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <div className="header_Buttons">
        <input
          type="text"
          className="header_Buttons Input"
          placeholder="검색어를 입력해주세요"
          title="검색어"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          className="header_Buttons Search"
          alt="검색"
          onClick={() => setInputValue(inputValue)}
        >
          🔍
        </button>
      </div>
    </>
  );
}

// const headerNav = useNavigate();
// // Debounce 훅 : 입력받은 값에 대해서 지정한 시간이후에 값을 가져오는지
// const debounceValue = useDebounce(inputValue, 2000);

// useEffect(() => {
//   setSearchList(movieSearchList);
// }, [movieSearchList]);

// searchParams의 값 가져오는 훅
// const movieKeyWord = useSearchKeyword('movie');

// const [searchParams] = useSearchParams;
// const movieKeyWord = searchParams.get('movie');
// console.log(movieKeyWord);

// debounceValue에 값이 없으면 메인페이지로 이동
// debounceValue에 값이 있으면 검색결과로 이동
// useEffect(() => {
//   if (debounceValue === '') {
//     headerNav('/');
//   } else {
//     headerNav(`/search?movie=${debounceValue}`);
//   }
// }, [debounceValue, headerNav]);
