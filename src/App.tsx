import * as React from 'react';
import {Navigator} from './pages';
import {Provider} from 'react-redux';
import store from './store';
import './i18next';

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
