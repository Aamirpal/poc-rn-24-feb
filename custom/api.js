import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getPosts = async () => {
  try {
    const response = await api.get('/posts');    
    return response.data;
  } catch (error) {
    throw error;
  }
};