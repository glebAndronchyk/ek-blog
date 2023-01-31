import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { LOADING, IDLE, REJECTED } from 'helpers/loadingStatus';
import { createNews, getNews } from 'services/newsService';

const initialState = {
  data: [],
  initialLoading: LOADING,
  additionalLoading: IDLE,
  postingLoading: IDLE,
  showLoadMoreButton: false,
  page: 2,
};

export const getInitialData = createAsyncThunk(
  'posts/getInitialData', //
  () => getNews('posts'),
);

export const getAdditionalData = createAsyncThunk(
  'posts/getAdditionalData', //
  pageNumber => getNews('posts', pageNumber),
);

export const tryToPostNews = createAsyncThunk(
  'posts/tryToPostNews', //
  data => createNews('posts', data),
);

const postsListSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postDeleted: (state, action) => {
      state.data = state.data.filter(item => item === action.payload);
    },
    stateReseted: () => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getInitialData.fulfilled, (state, action) => {
        state.showLoadMoreButton = action.payload.length > 0;
        state.initialLoading = IDLE;
        state.data = action.payload;
      })
      .addCase(getInitialData.rejected, state => {
        state.initialLoading = REJECTED;
      })
      .addCase(getAdditionalData.pending, state => {
        state.additionalLoading = LOADING;
      })
      .addCase(getAdditionalData.fulfilled, (state, action) => {
        state.showLoadMoreButton = action.payload.length > 0;
        state.additionalLoading = IDLE;
        state.page = ++state.page;
        state.data = [...state.data, ...action.payload];
      })
      .addCase(getAdditionalData.rejected, state => {
        state.additionalLoading = REJECTED;
      })
      .addCase(tryToPostNews.pending, state => {
        state.postingLoading = LOADING;
      })
      .addCase(tryToPostNews.fulfilled, (state, action) => {
        state.postingLoading = IDLE;
        state.data = [{ ...action.payload }, ...state.data];
      })
      .addCase(tryToPostNews.rejected, (state) => {
        state.postingLoading = REJECTED;
      });
  },
});

const { reducer, actions } = postsListSlice;
export default reducer;

export const { stateReseted } = actions;

// TODO: ADD AND REMOVE POSTS
// export const {
//   postAdded,
//   postDeleted,
// } = actions
