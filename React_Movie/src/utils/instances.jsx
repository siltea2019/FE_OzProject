import axios from 'axios';
import { BASE_URL, KAKAO_BASE_URL } from '../utils/constants';

// axios.defaults.withCredentials = true

export const client = axios.create({
  baseURL: 'http://localhost:5173',
});

export const kakao = axios.create({
  baseURL: KAKAO_BASE_URL,
});
