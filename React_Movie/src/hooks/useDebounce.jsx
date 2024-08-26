import { useEffect, useState } from 'react';

// 분리 : 디바운스
// 디바운스 커스텀훅
// value : 디바운스를 할 데이터 => 검색어의 입력지연시간에 대한 디바운스이기 때문에
// inputValue,변수나 상수를 넣어 사용하면됨
// delay 지연시간
export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay || 1000);
    // delay 값이 입력이 되지 않았을때 기본값 1초

    // 리턴문으로 setTimeout으로 지워야 함(clean up)
    // 1. 계속적으로 실행될 setTimeout과 이전 타이머가 계속해서 실행될 수 있음
    // 2. 컴포넌트가 언마운트 될때 useEffect의 cleanup함수가 실행됨 타이머 정리 하지 않을경우 메모리 누수
    // => 불필요한 타이머 제거
    // 3.상태를 지겨보고 있는 set함수로 인해 value값을 추적하게 되고
    // 상태가 변경될때마다 이전 타이머는 필요하지 않게 되므로 clean up

    // 요약//
    // 1. 중복실행방지 2. 컴포넌트 언마운트시 메모리 누수를 방지하기 위해
    // 3. 이전타이머 취소후 최신타이머만 유지하여 최신상태 보장
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

//디바운스 검색어 조합 => 분리가능
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
