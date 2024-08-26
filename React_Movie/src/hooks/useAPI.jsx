import { useEffect, useState } from 'react';

// const API_KEY = import.meta.env.VITE_API_KEY;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

// API를 호출해서 결과값을 받아오는 커스텀훅
export default function useAPI(url, CRUD) {
  // 데이터 상태를 보내주는 상태
  const [getApiData, setGetApiData] = useState();
  // 데이터 로딩을 기다릴 상태
  const [loading, setLoading] = useState(true);

  // useState를 사용하는 이유
  // 상태함수를 이용하여 상태를 관리하고 상태값에 데이터를 저장하기 위해

  // URL뒤에 CRUD값과 API토큰값을 붙여 응답을 받아오는 변수
  const options = {
    method: CRUD,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };

  // async 함수 : 비동기 작업 수행 = Promise를 값으로 반환(return값)
  // + Promise.resolve()를 통해 감싸져 Promise로 반환
  const fetchAPI = async () => {
    try {
      // await : Promise가 처리될때 까지 기다렸다가 실행되면 결과값 반환
      const response = await fetch(url, options);
      const jsonData = await response.json();
      setGetApiData(jsonData);
      setLoading(false);

      // 데이터를 받아오지 못했을때 콘솔과 알림창 출력
    } catch (error) {
      console.error(error);
      alert('데이터를 불러오지 못했습니다');
    }
  };

  // [] (비어있는 의존성배열) : 마운트(첫 랜더링) 될때만 useEffect안의 함수 실행
  useEffect(() => {
    const fetchAPI2 = fetchAPI(url, options);
    setLoading(false);
    console.log(fetchAPI2);
  }, [setGetApiData, setLoading]);

  // fetch할때 받아온 데이터(=jsonData)를 setGetApiData 상태함수에 담음
  // fetch가 성공하면 기초값이 true였던 setLoading 상태함수를 false로 바꾸어
  // fetch가 성공했다는 값을 확인할 수 있음
  return { getApiData, url, loading };
}

// TMdb에서 가져온 코드중 일부
// fetch('https://api.themoviedb.org/3/movie/popular?language=ko&page=1', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
