import { configureStore } from '@reduxjs/toolkit';

import posts from '../slices/postsListSlice';
import announcements from '../slices/announcementsListSlice';

const store = configureStore({
  reducer: { posts, announcements }, //reducers here
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENC !== 'production',
});

export default store;
