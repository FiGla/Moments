import {Appearance} from 'react-native';
import {UIState} from '../../models';
import {SET_REFRESH, TOGGLE_DARK_THEME} from '../actions/actionTypes';

const colorScheme = Appearance.getColorScheme();

const initialState: UIState = {
  isRefreshing: false,
  isDarkTheme: colorScheme === 'dark' ? true : false,
};
export const UIReducer = (
  state: UIState = initialState,
  action: {type: string; payload: boolean},
) => {
  switch (action.type) {
    case SET_REFRESH:
      return {
        ...state,
        isRefreshing: action.payload,
      };
    case TOGGLE_DARK_THEME:
      return {
        ...state,
        isDarkTheme: action.payload,
      };
    default:
      return state;
  }
};
