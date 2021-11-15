import {getNewsFeedFromApi, searchNewsFeed} from '../../apis';
import {ErrorResponse, DispatchParam, NewsFeedPayload} from '../../models';
import {
  FETCH_NEWS_FEED,
  FETCH_NEWS_FEED_FAILED,
  FETCH_NEWS_FEED_DONE,
} from './actionTypes';

export const fetchNewsFeedAction = () => {
  return (dispatch: (param: DispatchParam) => {}) => {
    dispatch({
      type: FETCH_NEWS_FEED,
    });
    return getNewsFeedFromApi()
      .then(({data}: {data: NewsFeedPayload}) => {
        dispatch({
          type: FETCH_NEWS_FEED_DONE,
          payload: data,
        });
      })
      .catch((error: ErrorResponse) => {
        dispatch({
          type: FETCH_NEWS_FEED_FAILED,
          payload: error,
        });
      });
  };
};

export const searchNewsFeedAction = (searchText: string) => {
  return (dispatch: (param: DispatchParam) => {}) => {
    dispatch({
      type: FETCH_NEWS_FEED,
    });
    return searchNewsFeed(searchText)
      .then(({data}: {data: NewsFeedPayload}) => {
        dispatch({
          type: FETCH_NEWS_FEED_DONE,
          payload: data,
        });
      })
      .catch((error: ErrorResponse) => {
        dispatch({
          type: FETCH_NEWS_FEED_FAILED,
          payload: error,
        });
      });
  };
};
