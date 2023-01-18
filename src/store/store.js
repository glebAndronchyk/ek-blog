import { configureStore } from '@reduxjs/toolkit';

import posts from '../components/postsList/postsListSlice';

const store = configureStore({
  reducer: { posts }, //reducers here
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENC !== 'production',
});

export default store;
