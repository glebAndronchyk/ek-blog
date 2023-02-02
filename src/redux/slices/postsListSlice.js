import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { LOADING, IDLE, REJECTED } from 'helpers/loadingStatus';
import { createNews, getNews, deleteNews, editNews } from 'services/newsService';

const initialState = {
  data: [],
  initialLoading: LOADING,
  additionalLoading: IDLE,
  userActionLoading: IDLE,
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

export const tryToEditNews = createAsyncThunk(
  'posts/tryToEditNews', //
  ([data, id]) => editNews('posts', data, id),
);

export const tryToDeletePost = createAsyncThunk(
  '/posts/tryToDeletePost', //
  id => deleteNews(`posts/${id}`),
);

const postsListSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
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
        state.userActionLoading = LOADING;
      })
      .addCase(tryToPostNews.fulfilled, (state, action) => {
        state.userActionLoading = IDLE;
        state.data = [{ ...action.payload }, ...state.data];
      })
      .addCase(tryToPostNews.rejected, state => {
        state.userActionLoading = REJECTED;
      })
      .addCase(tryToDeletePost.pending, state => {
        state.userActionLoading = LOADING;
      })
      .addCase(tryToDeletePost.fulfilled, (state, action) => {
        state.userActionLoading = IDLE;
        state.data = state.data.filter(item => item.id !== action.meta.arg);
      })
      .addCase(tryToDeletePost.rejected, state => {
        state.userActionLoading = REJECTED;
      })
      .addCase(tryToEditNews.pending, state => {
        state.userActionLoading = LOADING;
      })
      .addCase(tryToEditNews.fulfilled, (state, action) => {
        const { data } = state;
        const { payload } = action;
        const changedElementIndex = data.findIndex(element => element.id === payload.id);
        data[changedElementIndex] = { ...data[changedElementIndex], title: payload.title, body: payload.body };
        state.userActionLoading = IDLE;
      })
      .addCase(tryToEditNews.rejected, state => {
        state.userActionLoading = REJECTED;
      });
  },
});

const { reducer, actions } = postsListSlice;
export default reducer;

export const { stateReseted } = actions;
