import { useSearchParams } from 'react-router-dom';
import { getRegExp } from 'korean-regexp';

// 분리 : 검색어
// 키워드를 받으면 useSearchParams훅을 이용해
// URL에서 keyword와 일치하는 값을 가져오겠다
// useSearchParams는 searchParams 객체와 setSearchParams함수 반환
// keyword는 변수

export default function useSearchKeyword(keyword) {
  const [searchParams] = useSearchParams();
  const searchParamsResult = searchParams.get(keyword);
  return searchParamsResult || '';
}

// 한국어 검색
// export default function useSearchKeyword(keyword) {
//   const [searchParams] = useSearchParams();
//   const param = searchParams.get(keyword) || ''; // 검색어가 없으면 빈 문자열 반환

//   // 한국어 검색어를 위한 정규식 생성
//   const regex = getRegExp(param);

//   return regex;
// }
