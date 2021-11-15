import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Card, Button} from 'react-native-elements';
import {NewsFeed, RootStackParamList} from '../../models';
import {StackNavigationProp} from '@react-navigation/stack';

type detailsScreenProp = StackNavigationProp<RootStackParamList, 'Details'>;

type NewsFeedItemProp = {
  newsFeed: NewsFeed;
};
const NewsFeedItem = ({newsFeed}: NewsFeedItemProp) => {
  const navigation = useNavigation<detailsScreenProp>();

  const newsFeedImage = () =>
    newsFeed.image_url ? (
      <Card.Image
        style={styles.image}
        source={{
          uri: newsFeed.image_url,
        }}
      />
    ) : null;

  const newsFeedDescription = () =>
    newsFeed.description ? (
      <Text numberOfLines={3} style={styles.description}>
        {newsFeed.description}
      </Text>
    ) : null;

  return (
    <Card>
      <Card.Title>{newsFeed.title}</Card.Title>
      <Card.Divider />
      {newsFeedImage()}
      {newsFeedDescription()}
      <Button
        title="READ"
        onPress={() => navigation.navigate('Details', {newsFeed})}
      />
    </Card>
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
