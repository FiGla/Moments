import {UIState} from '../../models';
import {SET_REFRESH} from '../actions/actionTypes';

export const UIReducer = (
  state: UIState = {isRefreshing: false},
  action: {type: string; payload: boolean},
) => {
  switch (action.type) {
    case SET_REFRESH:
      return {isRefreshing: action.payload};
    default:
      return state;
  }
};
