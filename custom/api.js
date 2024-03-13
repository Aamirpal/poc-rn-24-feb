import axios from 'axios';

const API_BASE_URL = 'https://65efc415ead08fa78a50e705.mockapi.io';

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

export const getPost = async (id) => {
    try {
      const response = await api.get('/posts/'+id);
      return response.data;
    } catch (error) {
      throw id+error;
    }
  };