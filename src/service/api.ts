import { fetchApi } from '@/config/axios';

export async function topHeadlines(country: string, search: string,category:string) {
  try {
    const response = await fetchApi(
      'get',
      `top-headlines?country=${country}&q=${search}&category=${category}`
    );
    return response;
  } catch (err) {
    return err;
  }
}
