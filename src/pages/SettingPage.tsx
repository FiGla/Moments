import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Button, StyleSheet, Text} from 'react-native';
import {List, Switch} from 'react-native-paper';
import {toggleThemeAction} from '../redux/actions';
import {connect} from 'react-redux';
import {State} from '../models';
import {useTheme} from '@react-navigation/native';
import {ListItem} from 'react-native-elements';

const SettingPage = ({
  isDarkTheme,
  toggleTheme,
}: Partial<{
  isDarkTheme?: boolean;
  toggleTheme: (isDarkTheme: boolean) => any;
}>) => {
  const {t, i18n} = useTranslation();
  const {colors} = useTheme();

  const switchThemes = () => (
    <ListItem
      containerStyle={[
        styles.switchThemes,
        {backgroundColor: colors.background},
      ]}
      hasTVPreferredFocus={false}
      tvParallaxProperties={false}>
      <View style={styles.switchThemeText}>
        <List.Icon icon="brightness-4" color={colors.text} />
        <Text style={{color: colors.text}}>{t('darkMode')}</Text>
      </View>
      <Switch
        style={styles.switchButton}
        value={isDarkTheme}
        onValueChange={toggleTheme}
      />
    </ListItem>
  );

  return (
    <View style={styles.container}>
      {switchThemes()}
      <View style={styles.languageContainer}>
        <Button title={t('german')} onPress={() => i18n.changeLanguage('gr')} />
        <Button
          title={t('english')}
          onPress={() => i18n.changeLanguage('en')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  switchThemes: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  switchThemeText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchButton: {alignSelf: 'center'},
  languageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
});

const mapStateToProps = (state: State) => ({
  isDarkTheme: state.uiFlags.isDarkTheme,
});

const mapDispatchToProps = {
  toggleTheme: toggleThemeAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(SettingPage);
