import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {LinearProgress} from 'react-native-elements';
import {fetchNewsFeedAction, searchNewsFeedAction} from '../redux/actions';
import {NewsFeed as NewsFeedComponent, ErrorScreen} from '../components';
import {NewsFeedState, State} from '../models';
import SearchBarComponent from '../components/SearchBar';
import {View} from 'react-native';

type NewsFeedContainerProps = {
  fetchNewsFeed: () => {};
  searchNewsFeed: (searchText: string) => {};
  data: NewsFeedState;
};

const NewsFeedContainer = ({
  fetchNewsFeed,
  searchNewsFeed,
  data,
}: NewsFeedContainerProps) => {
  useEffect(() => {
    fetchNewsFeed();
  }, [fetchNewsFeed]);

  if (data.error) {
    return <ErrorScreen errorMessage={data.error} />;
  }

  return (
    <View>
      <SearchBarComponent
        loadData={searchNewsFeed}
        fetchOriginalData={fetchNewsFeed}
      />
      {data.loading && <LinearProgress color="primary" />}
      {data.data && <NewsFeedComponent newsFeed={data.data.results} />}
    </View>
  );
};

const mapStateToProps = (state: State) => ({
  data: state.newsFeed,
});

const mapDispatchToProps = {
  fetchNewsFeed: fetchNewsFeedAction,
  searchNewsFeed: searchNewsFeedAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(NewsFeedContainer);
