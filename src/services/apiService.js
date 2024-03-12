
import axios from 'axios';

const API_URL = 'https://app.olimpiadas.app/teste';

export const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    return null;
  }
};