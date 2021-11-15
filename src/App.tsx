import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NewsFeedContainer} from './pages';
import {Provider} from 'react-redux';
import store from './store';
import {NewsFeedDetails} from './components';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="News">
          <Stack.Screen name="News" component={NewsFeedContainer} />
          <Stack.Screen name="Details" component={NewsFeedDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
