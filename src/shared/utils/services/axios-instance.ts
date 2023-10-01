import axios from 'axios';

const baseURL = 'http://localhost:3000/api/v1'; 

export const AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  }
});
