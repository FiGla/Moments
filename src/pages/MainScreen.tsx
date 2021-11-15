import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NewsFeedContainer from './NewsFeedContainer';
import {BottomTabParamList} from '../models';
import SettingPage from './SettingPage';
import {useTranslation} from 'react-i18next';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const MainScreen = () => {
  const {t} = useTranslation();

  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="News"
        options={{
          tabBarIconStyle: {display: 'none'},
          title: t('news'),
        }}
        component={NewsFeedContainer}
      />
      <BottomTab.Screen
        name="Setting"
        options={{
          tabBarIconStyle: {display: 'none'},
          title: t('setting'),
        }}
        component={SettingPage}
      />
    </BottomTab.Navigator>
  );
};

export default MainScreen;
