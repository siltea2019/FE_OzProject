import { useEffect, useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import '../CSS/Search.scss';
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export default function Search({ setMovieList }) {
  const [inputValue, setInputValue] = useState('');
  const [searchData, setSearchData] = useState(null);
  const [searchDebounce] = useDebounce(inputValue, 1300);
  const [showInput, setShowInput] = useState(false);
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchDebounce}&include_adult=false&language=ko&page=1`;

  // useEffect(() => {
  //   if (movieSearchListApi) setMovieList(movieSearchListApi.results);
  // }, [searchDebounce]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_TOKEN}`,
      },
    };

    const fetchAPI = async () => {
      try {
        const response = await fetch(url, options);
        const jsonData = await response.json();
        setSearchData(jsonData);
      } catch (error) {
        console.error(error);
        alert('데이터를 불러오지 못했습니다');
      }
    };
    fetchAPI();
  }, [url]);

  const searchList =
    searchData?.results?.map((list) => ({
      id: list.id,
      title: list.title,
      poster_path: `http://image.tmdb.org/t/p/w200${list.poster_path}`,
      vote_average: list.vote_average,
    })) || [];

  console.log(searchList);

  return (
    <>
      <div className="search-container">
        <header className="header_buttons">
          {showInput ? (
            <input
              type="text"
              className="header-input "
              placeholder="검색어를 입력해주세요"
              title="검색어"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
          ) : null}
          <button
            className="header-search-button"
            alt="검색"
            onClick={() => setShowInput(!showInput)}
          >
            🔍
          </button>
        </header>
        <div className="search-results">
          <ul className="movie-list">
            {searchList.map((card) => (
              <li key={card.id} className="movie-card">
                {/* <Link key={card.id} to={`/details/${card.id}`}> */}
                <div className="movie-poster">
                  <img
                    className="movie-poster-image"
                    src={`https://image.tmdb.org/t/p/w200${card.poster_path}`}
                    alt={card.title}
                  />
                </div>
                <div className="movie-title">{card.title}</div>
                <div className="movie-vote">{card.vote_average}</div>
                {/* </Link> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

// 1버전
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

// 2버전
/*  const [inputValue, setInputValue] = useState('');

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

  console.log(getApiData); */
