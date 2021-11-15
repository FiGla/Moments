import {NewsFeedState, NewsFeedResponse} from '../../models';
import {
  FETCH_NEWS_FEED,
  FETCH_NEWS_FEED_DONE,
  FETCH_NEWS_FEED_FAILED,
} from '../actions/actionTypes';

export const newsFeedReducer = (
  state: NewsFeedState = {loading: false},
  action: NewsFeedResponse,
) => {
  switch (action.type) {
    case FETCH_NEWS_FEED:
      return {loading: true};
    case FETCH_NEWS_FEED_DONE:
      return {data: action.payload, loading: false};
    case FETCH_NEWS_FEED_FAILED:
      return {error: action.payload};
    default:
      return state;
  }
};
