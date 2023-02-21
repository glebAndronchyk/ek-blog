import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { LOADING, IDLE, REJECTED } from 'helpers/loadingStatus';
import { createNews, getNews, deleteNews, editNews, getUserRelatedNews } from 'services/newsService';

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

export const getInitialUserRelatedData = createAsyncThunk(
  'posts/getInitialUserRelatedData', //
  () => getUserRelatedNews('posts'),
);

export const getAdditionalPostsData = createAsyncThunk(
  'posts/getAdditionalData', //
  pageNumber => getNews('posts', pageNumber),
);

export const getUserRelatedAdditionalPostsData = createAsyncThunk(
  'posts/getUserRelatedAdditionalPostsData', //
  pageNumber => getUserRelatedNews('posts', pageNumber),
);

export const tryToCreatePost = createAsyncThunk(
  'posts/tryToPostNews', //
  data => createNews('posts', data),
);

export const tryToEditPost = createAsyncThunk(
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
    postsStateReseted: () => {
      return initialState;
    },
    userActionLoadingReseted: state => {
      state.userActionLoading = IDLE;
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
      .addCase(getInitialUserRelatedData.fulfilled, (state, action) => {
        state.showLoadMoreButton = action.payload.length > 0;
        state.initialLoading = IDLE;
        state.data = action.payload;
      })
      .addCase(getAdditionalPostsData.pending, state => {
        state.additionalLoading = LOADING;
      })
      .addCase(getAdditionalPostsData.fulfilled, (state, action) => {
        state.showLoadMoreButton = action.payload.length > 0;
        state.additionalLoading = IDLE;
        state.page = ++state.page;
        state.data = [...state.data, ...action.payload];
      })
      .addCase(getAdditionalPostsData.rejected, state => {
        state.additionalLoading = REJECTED;
      })
      .addCase(getUserRelatedAdditionalPostsData.pending, state => {
        state.additionalLoading = LOADING;
      })
      .addCase(getUserRelatedAdditionalPostsData.fulfilled, (state, action) => {
        state.showLoadMoreButton = action.payload.length > 0;
        state.additionalLoading = IDLE;
        state.page = ++state.page;
        state.data = [...state.data, ...action.payload];
      })
      .addCase(getUserRelatedAdditionalPostsData.rejected, state => {
        state.additionalLoading = REJECTED;
      })
      .addCase(tryToCreatePost.pending, state => {
        state.userActionLoading = LOADING;
      })
      .addCase(tryToCreatePost.fulfilled, (state, action) => {
        state.userActionLoading = IDLE;
        state.data = [{ ...action.payload }, ...state.data];
      })
      .addCase(tryToCreatePost.rejected, state => {
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
      .addCase(tryToEditPost.pending, state => {
        state.userActionLoading = LOADING;
      })
      .addCase(tryToEditPost.fulfilled, (state, action) => {
        const { data } = state;
        const { payload } = action;
        const changedElementIndex = data.findIndex(element => element.id === payload.id);
        data[changedElementIndex] = { ...data[changedElementIndex], title: payload.title, body: payload.body };
        state.userActionLoading = IDLE;
      })
      .addCase(tryToEditPost.rejected, state => {
        state.userActionLoading = REJECTED;
      });
  },
});

const { reducer, actions } = postsListSlice;
export default reducer;

export const { postsStateReseted, userActionLoadingReseted } = actions;
