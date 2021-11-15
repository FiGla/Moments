import React from 'react';
import {View, Text} from 'react-native';
import {ErrorResponse} from '../../models';

const ErrorScreen = ({errorMessage}: {errorMessage: ErrorResponse}) => {
  return (
    <View>
      <Text>{errorMessage.message}</Text>
    </View>
  );
};

export default ErrorScreen;
