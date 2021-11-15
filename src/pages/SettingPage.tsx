import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Button, StyleSheet} from 'react-native';

const SettingPage = () => {
  const {t, i18n} = useTranslation();

  return (
    <View style={styles.container}>
      <Button title={t('german')} onPress={() => i18n.changeLanguage('gr')} />
      <Button title={t('english')} onPress={() => i18n.changeLanguage('en')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default SettingPage;
