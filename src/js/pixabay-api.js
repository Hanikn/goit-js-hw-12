import axios from 'axios';

export async function apiPixabay(searchWord, page) {
  const API_KEY = '43459194-a58fa84b79e2fe067af435c08';
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: searchWord,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 15,
    },
  });
  return response.data;
}
