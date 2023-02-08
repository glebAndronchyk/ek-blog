import { configureStore } from '@reduxjs/toolkit';

import posts from './slices/postsListSlice';
import announcements from './slices/announcementsListSlice';
import modal from './slices/modalSlice';
import user from './slices/userSlice';
import comments from './slices/commentsSlice';

const store = configureStore({
  reducer: { posts, announcements, modal, user, comments },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENC !== 'production',
});

export default store;
