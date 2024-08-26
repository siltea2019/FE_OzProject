import { useEffect, useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import { CONFIG_API_TOKEN, SEARCH_URL } from './config';
import useAPI from '../hooks/useAPI';
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export default function Search({ movieList }) {
  const [inputValue, setInputValue] = useState('');

  const [searchDebounce] = useDebounce(inputValue, 3000);
  const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${searchDebounce}&include_adult=false&language=ko&page=1`;

  const [getApiData, setGetApiData] = useState([]);
  const [loading, setLoading] = useState(false);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(searchUrl, options);
      const jsonData = await response.json();
      setGetApiData(jsonData);
      setLoading(false);
    } catch (error) {
      console.error(error);
      alert('데이터를 불러오지 못했습니다');
    } finally {
      setLoading(false);
    }
    return getApiData, loading;
  };

  console.log(getApiData);

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
          onClick={() => setInputValue()}
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
