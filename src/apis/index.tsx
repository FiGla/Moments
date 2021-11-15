import axios from 'axios';
import {API_KEY} from './secrets';

const baseUrl = `https://newsdata.io/api/1/news?apikey=${API_KEY}`;

const getNewsFeedFromApi = () => {
  return axios.get(baseUrl);
};

const searchNewsFeed = (searchText: string) => {
  return axios.get(`${baseUrl}&q=${searchText}`);
};
export {getNewsFeedFromApi, searchNewsFeed};
