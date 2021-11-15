export type NewsFeed = {
  title: string;
  created_at: Date;
  content: string;
  creator: string[];
  description: string;
  full_description: string;
  image_url: string;
  keywords: string[];
  link: string;
  pubDate: Date;
};

export type ErrorResponse = {
  type: string;
  message: string;
};

export type NewsFeedPayload = {
  nextPage: Number;
  results: NewsFeed[];
  status: 'success' | 'fail';
  totalResults: Number;
};

export type NewsFeedResponse = {
  type: string;
  payload: NewsFeedPayload | ErrorResponse;
};

export type NewsFeedState = {
  data?: NewsFeedPayload;
  loading: boolean;
  error?: ErrorResponse;
};

export type State = {
  newsFeed: NewsFeedState;
  uiFlags: UIState;
};

export type DispatchParam = {
  type: string;
  payload?: any;
};

export type RootStackParamList = {
  Home: undefined;
  Details: {
    newsFeed: NewsFeed;
  };
};

export type UIState = {
  isRefreshing: boolean;
};

export type BottomTabParamList = {
  News: undefined;
  Setting: {
    newsFeed: NewsFeed;
  };
};
