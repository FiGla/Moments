import * as React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './MainScreen';
import {NewsFeedDetails} from '../components';
import {RootStackParamList, State} from '../models';
import {useTranslation} from 'react-i18next';
import {connect} from 'react-redux';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = ({isDarkTheme}: Partial<{isDarkTheme: boolean}>) => {
  const {t} = useTranslation();

  return (
    <NavigationContainer theme={isDarkTheme ? DarkTheme : DefaultTheme}>
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
  );
};

const mapStateToProps = (state: State) => ({
  isDarkTheme: state.uiFlags.isDarkTheme,
});

export default connect(mapStateToProps, null)(Navigator);
