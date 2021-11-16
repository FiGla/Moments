import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NewsFeedContainer from './NewsFeedContainer';
import {BottomTabParamList} from '../models';
import SettingPage from './SettingPage';
import {useTranslation} from 'react-i18next';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const MainScreen = () => {
  const {t} = useTranslation();

  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="News"
        options={{
          title: t('news'),
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
        component={NewsFeedContainer}
      />
      <BottomTab.Screen
        name="Setting"
        options={{
          title: t('setting'),
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'settings-sharp' : 'settings-outline'}
              size={size}
              color={color}
            />
          ),
        }}
        component={SettingPage}
      />
    </BottomTab.Navigator>
  );
};

export default MainScreen;
