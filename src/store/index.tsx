import {rootReducer} from '../redux/reducers';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

export default createStore(rootReducer, applyMiddleware(thunk));
