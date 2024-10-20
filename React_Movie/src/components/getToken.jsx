import React from 'react';
import { kakao } from '../utils/instances';
import { KAKAO_API_KEY, KAKAO_REDIRECT_URI } from '../utils/constants';

const getKakaoToken = async (code) => {
  try {
    const kakaoTokenResponse = await kakao.get('/token', {
      headers: {
        'Content-Type':
          'Content-type: application/x-www-form-urlencoded;charset=utf-8',
      },
      params: {
        grant_type: 'authorization_code',
        client_id: KAKAO_API_KEY,
        redirect_uri: KAKAO_REDIRECT_URI,
        code: code,
      },
    });
    const data = await kakaoTokenResponse.data;
    return data;
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export default getKakaoToken;

// 요청 내용
// 헤더
// Content-type	Content-type: application/x-www-form-urlencoded;charset=utf-8
// 본문
// grant_type	String	authorization_code로 고정
// client_id	String	앱 REST API
// redirect_uri	String	인가 코드가 리다이렉트된 URI
// code	String	인가 코드 받기 요청으로 얻은 인가 코드
