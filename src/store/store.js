import { configureStore } from '@reduxjs/toolkit';

import posts from '../slices/postsListSlice';
import announcements from '../slices/announcementsListSlice';
import modal from '../slices/modalSlice';
import user from '../slices/userSlice';

const store = configureStore({
  reducer: { posts, announcements, modal, user },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENC !== 'production',
});

export default store;
