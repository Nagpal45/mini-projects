import axios from 'axios';
const API_URL = 'https://openlibrary.org/search.json';

export const fetchBooks = async (query, page, limit) => {
  const response = await axios.get(API_URL, {
    params: {
      q: query,
      page,
      limit,
    },
  });
  return response.data.docs;
};