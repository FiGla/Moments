import {DispatchParam} from '../../models';
import {SET_REFRESH} from './actionTypes';
export const toggleRefreshAction = (isRefreshing: boolean) => {
  return (dispatch: (param: DispatchParam) => {}) => {
    return dispatch({
      type: SET_REFRESH,
      payload: isRefreshing,
    });
  };
};
