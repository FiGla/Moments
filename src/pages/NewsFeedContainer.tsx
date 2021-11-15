import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {LinearProgress} from 'react-native-elements';
import {fetchNewsFeedAction} from '../redux/actions';
import {NewsFeed as NewsFeedComponent, ErrorScreen} from '../components';
import {NewsFeedState, State} from '../models';

type NewsFeedContainerProps = {
  fetchNewsFeed: () => {};
  data: NewsFeedState;
};

const NewsFeedContainer = ({fetchNewsFeed, data}: NewsFeedContainerProps) => {
  useEffect(() => {
    fetchNewsFeed();
  }, [fetchNewsFeed]);

  if (data.error) {
    return <ErrorScreen errorMessage={data.error} />;
  }

  if (data.loading || !data.data) {
    return <LinearProgress color="primary" />;
  }

  return data.data && <NewsFeedComponent newsFeed={data.data.results} />;
};

const mapStateToProps = (state: State) => ({
  data: state.newsFeed,
});

const mapDispatchToProps = {fetchNewsFeed: fetchNewsFeedAction};
export default connect(mapStateToProps, mapDispatchToProps)(NewsFeedContainer);
