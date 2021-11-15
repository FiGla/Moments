import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {NewsFeed} from '../../models';
import NewsFeedItem from './NewsFeedItem';

type NewsFeedComponentProp = {newsFeed: NewsFeed[]};

const NewsFeedComponent = ({newsFeed}: NewsFeedComponentProp) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {newsFeed.map((n, i) => (
          <NewsFeedItem newsFeed={n} index={i} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NewsFeedComponent;
