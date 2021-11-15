import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen} from './pages';
import {Provider} from 'react-redux';
import store from './store';
import {NewsFeedDetails} from './components';
import {RootStackParamList} from './models';
import {useTranslation} from 'react-i18next';
import './i18next';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const {t} = useTranslation();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            options={{
              headerShown: false,
            }}
            component={MainScreen}
          />
          <Stack.Screen
            name="Details"
            options={{
              title: t('details'),
            }}
            component={NewsFeedDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
