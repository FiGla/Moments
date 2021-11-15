import {combineReducers} from '@reduxjs/toolkit';
import {newsFeedReducer} from './newsFeed';

export const rootReducer = combineReducers({newsFeed: newsFeedReducer});
