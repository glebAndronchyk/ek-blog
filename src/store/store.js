import { configureStore } from '@reduxjs/toolkit';

import posts from '../slices/postsListSlice';
import announcements from '../slices/announcementsListSlice';
import login from '../slices/loginSlice';

const store = configureStore({
  reducer: { posts, announcements, login },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENC !== 'production',
});

export default store;
