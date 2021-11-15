export type NewsFeed = {
  title: string;
  created_at: Date;
};

export type ErrorResponse = {
  type: string;
  message: string;
};

export type NewsFeedResponse = {
  type: string;
  payload: NewsFeed[] | ErrorResponse;
};

export type NewsFeedState = {
  data: NewsFeed[];
  loading: boolean;
  error: ErrorResponse;
};

export type State = {
  newsFeed: NewsFeedState;
};

export type DispatchParam = {
  type: string;
  payload?: any;
};
