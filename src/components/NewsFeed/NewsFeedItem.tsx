import {useNavigation, useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import {NewsFeed, RootStackParamList} from '../../models';
import {StackNavigationProp} from '@react-navigation/stack';

type detailsScreenProp = StackNavigationProp<RootStackParamList, 'Details'>;

type NewsFeedItemProp = {
  newsFeed: NewsFeed;
};
const NewsFeedItem = ({newsFeed}: NewsFeedItemProp) => {
  const navigation = useNavigation<detailsScreenProp>();
  const {colors} = useTheme();

  const newsFeedImage = () =>
    newsFeed.image_url ? (
      <>
        <Card.Divider />
        <Card.Image
          style={styles.image}
          source={{
            uri: newsFeed.image_url,
          }}
        />
      </>
    ) : null;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', {newsFeed})}>
      <Card containerStyle={{backgroundColor: colors.card}}>
        <Card.Title>{newsFeed.title}</Card.Title>
        {newsFeedImage()}
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    marginBottom: 10,
  },
  description: {
    marginBottom: 10,
  },
});

export default NewsFeedItem;
