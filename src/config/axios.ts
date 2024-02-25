import { apiBaseUrl, apiKey } from '@/lib/constant';
import { method } from '@/type/axiosmethod';
import axios from 'axios';

export const fetchApi = async (
  method: method,
  endpoint: string,
  headers?: any,
  data?: any
) => {
  try {
    const response = await axios({
      method: method,
      url: `${apiBaseUrl}${endpoint}&apiKey=${apiKey}`,
      headers: {
        ...headers,
      },
      data: data,
    });
    return response;
  } catch (err) {
    throw err;
  }
};
