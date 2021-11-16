import {DispatchParam} from '../../models';
import {SET_REFRESH, TOGGLE_DARK_THEME} from './actionTypes';
export const toggleRefreshAction = (isRefreshing: boolean) => {
  return (dispatch: (param: DispatchParam) => {}) => {
    return dispatch({
      type: SET_REFRESH,
      payload: isRefreshing,
    });
  };
};

export const toggleThemeAction = (theme: boolean) => {
  return (dispatch: (param: DispatchParam) => {}) => {
    return dispatch({
      type: TOGGLE_DARK_THEME,
      payload: theme,
    });
  };
};
