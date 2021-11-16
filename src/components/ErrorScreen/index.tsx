import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ErrorResponse} from '../../models';
import {useTheme} from '@react-navigation/native';

const ErrorScreen = ({errorMessage}: {errorMessage: ErrorResponse}) => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <Text style={{color: colors.text}}>{errorMessage.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ErrorScreen;
