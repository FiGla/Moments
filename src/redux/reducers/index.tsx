import {combineReducers} from '@reduxjs/toolkit';
import {newsFeedReducer} from './newsFeed';
import {UIReducer} from './ui';

export const rootReducer = combineReducers({
  newsFeed: newsFeedReducer,
  uiFlags: UIReducer,
});
