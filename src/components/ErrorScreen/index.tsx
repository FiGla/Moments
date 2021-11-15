import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ErrorResponse} from '../../models';

const ErrorScreen = ({errorMessage}: {errorMessage: ErrorResponse}) => {
  return (
    <View style={styles.container}>
      <Text>{errorMessage.message}</Text>
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
