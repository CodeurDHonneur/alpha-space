import { snapiCustomFetch } from '@/utils/customFetch'
import type { NewsResponse } from '@/utils/types';
import type { LoaderFunction } from 'react-router-dom';


const newsParams = {
  news_site_exclude: "SpacePolicyOnline.com",
  limit: 20,
  ordering: "published_at"
}

export const newsPageLoader: LoaderFunction = async (): Promise<NewsResponse | null> => {
  try {
    const formattedParams = {
      ...newsParams
    };

    const response = await snapiCustomFetch.get<NewsResponse>("", {
      params: formattedParams
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}


const News = () => {
  return (
    <div>News</div>
  )
}

export default News