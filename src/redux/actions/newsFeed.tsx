import {getNewsFeedFromApi} from '../../apis';
import {ErrorResponse, NewsFeed, DispatchParam} from '../../models';
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
      .then(({data}: {data: NewsFeed[]}) => {
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
