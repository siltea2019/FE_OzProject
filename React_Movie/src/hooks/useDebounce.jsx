import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getRegExp } from 'korean-regexp';

// 분리 : 검색어
export function useSearchKeyword(keyword) {
  const [searchParams] = useSearchParams();
  return searchParams.get(keyword) || '';
}

// 분리 : 디바운스
export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

//디바운스 검색어 조합
// export default function useDebounce(data, param, keyword) {
//   // 필터링 대상의 상태
//   const [searchParams] = useSearchParams();
//   const [filteredData, setFilteredData] = useState(data);
//   const param = searchParams.get(keyword);
//   const params = getRegExp(param);

//   useEffect(() => {
//     const debounceTimer = setTimeout(() => {
//       const newTimeData = data.filter((el) => el.name.match(params));
//       setFilteredData(newTimeData);
//     }, 2000);
//     return () => clearTimeout(debounceTimer);
//   }, []);
//   return { filteredData };
// }
