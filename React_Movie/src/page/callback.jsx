import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import getKakaoToken from '../components/getToken';

const KakaoCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const code = searchParams.get('code');

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['data'],
    queryFn: () => getKakaoToken(code),
    enabled: !!code,
  });

  useEffect(() => {
    if (data) {
      console.log('R.data:', data);
      localStorage.setItem(
        'KaKaoToken',
        JSON.stringify({
          access_token: data.access_token,
          refresh_token: data.refresh_token,
        })
      );

      navigate('/');
    }
  }, [data]);

  return (
    <>
      {isLoading && <div>로그인 데이터를 로딩중 입니다</div>}
      {isError && <div>{error.message}</div>}
    </>
  );
};

export default KakaoCallback;
