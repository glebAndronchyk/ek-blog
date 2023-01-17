import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {}, //reducers here
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENC !== 'production',
});

export default store;
