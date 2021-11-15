import React from 'react';
import {View, ScrollView, StyleSheet, RefreshControl} from 'react-native';
import {NewsFeed} from '../../models';
import NewsFeedItem from './NewsFeedItem';

type NewsFeedComponentProp = {
  newsFeed: NewsFeed[];
  refreshing: boolean;
  toggleRefresh: (isRefreshing: boolean) => {};
};

const NewsFeedComponent = ({
  newsFeed,
  refreshing,
  toggleRefresh,
}: NewsFeedComponentProp) => {
  const onRefresh = React.useCallback(() => {
    if (!refreshing) {
      toggleRefresh(true);
    }
  }, [toggleRefresh, refreshing]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.container}>
        {newsFeed.map((n, i) => (
          <NewsFeedItem newsFeed={n} key={`newsFeed-${i}`} />
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
