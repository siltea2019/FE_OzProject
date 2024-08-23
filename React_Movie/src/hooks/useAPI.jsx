import { useEffect, useState } from 'react';
import { POPULAR_API_URL } from '../components/config';

export default function useAPI(url, CRUD) {
  // 데이터 상태를 보내주는 상태
  const [getApiData, setGetApiData] = useState();
  // 데이터 로딩을 기다릴 상태
  const [apiLoading, setApiLoading] = useState(true);

  //useState를 사용하는 이유 : 상태함수를 이용하여 상태를 관리하고 상태값에 데이터를 저장하기 위해

  const options = {
    method: CRUD,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
  };

  // 마운트 될때만 불러오겠다 => Hook개념확인필요
  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch(url, options);
      const apiData = await response.json();

      setGetApiData(apiData);
      setApiLoading(false);
    };
    fetchAPI();
  }, []);

  return { getApiData, apiLoading };
}

// fetch('https://api.themoviedb.org/3/movie/popular?language=ko&page=1', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
