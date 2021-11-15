import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {LinearProgress} from 'react-native-elements';
import {
  fetchNewsFeedAction,
  searchNewsFeedAction,
  toggleRefreshAction,
} from '../redux/actions';
import {NewsFeed as NewsFeedComponent, ErrorScreen} from '../components';
import {NewsFeedState, State} from '../models';
import SearchBarComponent from '../components/SearchBar';
import {SafeAreaView} from 'react-native';

type NewsFeedContainerProps = {
  fetchNewsFeed: () => Promise<void>;
  searchNewsFeed: (searchText: string) => {};
  toggleRefresh: (isRefreshing: boolean) => {};
  data: NewsFeedState;
  isRefreshing: boolean;
};

const NewsFeedContainer = ({
  fetchNewsFeed,
  searchNewsFeed,
  toggleRefresh,
  data,
  isRefreshing,
}: NewsFeedContainerProps) => {
  useEffect(() => {
    fetchNewsFeed();
  }, [fetchNewsFeed]);

  useEffect(() => {
    if (isRefreshing) {
      fetchNewsFeed().then(() => toggleRefresh(false));
    }
  }, [fetchNewsFeed, toggleRefresh, isRefreshing]);

  if (data.error) {
    return <ErrorScreen errorMessage={data.error} />;
  }

  return (
    <SafeAreaView>
      <SearchBarComponent
        loadData={searchNewsFeed}
        fetchOriginalData={fetchNewsFeed}
      />
      {data.loading && <LinearProgress color="primary" />}
      {data.data && (
        <NewsFeedComponent
          newsFeed={data.data.results}
          refreshing={isRefreshing}
          toggleRefresh={toggleRefresh}
        />
      )}
    </SafeAreaView>
  );
};

const mapStateToProps = (state: State) => ({
  data: state.newsFeed,
  isRefreshing: state.uiFlags.isRefreshing,
});

const mapDispatchToProps = {
  fetchNewsFeed: fetchNewsFeedAction,
  searchNewsFeed: searchNewsFeedAction,
  toggleRefresh: toggleRefreshAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(NewsFeedContainer);
