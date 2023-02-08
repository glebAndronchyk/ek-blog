import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { LOADING, IDLE, REJECTED } from 'helpers/loadingStatus';
import { deleteNews, editNews } from 'services/newsService';
import { getPostRelatedComments, createComment } from 'services/commentsService';

const initialState = {
  data: [],
  initialLoading: LOADING,
  additionalLoading: IDLE,
  userActionLoading: IDLE,
  showLoadMoreButton: false,
  page: 2,
};

export const getInitialData = createAsyncThunk(
  'comments/getInitialData', //
  postId => getPostRelatedComments(postId),
);

export const getAdditionalCommentsData = createAsyncThunk(
  'comments/getAdditionalCommentsData', //
  ([postId, pageNumber]) => {
    return getPostRelatedComments(postId, pageNumber);
  },
);

export const tryToCreateComment = createAsyncThunk(
  'comments/tryToCreateComment', //
  data => createComment(data),
);

export const tryToDeleteComment = createAsyncThunk(
  'comments/tryToDeleteComment', //
  id => deleteNews(`comments/${id}`),
);

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    commentsStateReseted: () => {
      return initialState;
    },
    userActionLoadingReseted: state => {
      state.userActionLoading = IDLE;
    },
    commentContentEdited: (state, action) => {
      const { data } = state;
      const { payload } = action;
      const changedElementIndex = data.findIndex(element => element.id === payload.id);
      data[changedElementIndex] = { ...data[changedElementIndex], title: payload.title, body: payload.body };
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
      .addCase(getAdditionalCommentsData.pending, state => {
        state.additionalLoading = LOADING;
      })
      .addCase(getAdditionalCommentsData.fulfilled, (state, action) => {
        state.showLoadMoreButton = action.payload.length > 0;
        state.additionalLoading = IDLE;
        state.page = ++state.page;
        state.data = [...state.data, ...action.payload];
      })
      .addCase(getAdditionalCommentsData.rejected, state => {
        state.additionalLoading = REJECTED;
      })
      .addCase(tryToCreateComment.pending, state => {
        state.userActionLoading = LOADING;
      })
      .addCase(tryToCreateComment.fulfilled, (state, action) => {
        state.userActionLoading = IDLE;
        state.data = [{ ...action.payload }, ...state.data];
      })
      .addCase(tryToCreateComment.rejected, state => {
        state.userActionLoading = REJECTED;
      })
      .addCase(tryToDeleteComment.pending, state => {
        state.userActionLoading = LOADING;
      })
      .addCase(tryToDeleteComment.fulfilled, (state, action) => {
        state.userActionLoading = IDLE;
        state.data = state.data.filter(item => item.id !== action.meta.arg);
      })
      .addCase(tryToDeleteComment.rejected, state => {
        state.userActionLoading = IDLE;
      });
  },
});

const { reducer, actions } = commentsSlice;
export default reducer;

export const { commentsStateReseted, commentContentEdited, userActionLoadingReseted } = actions;
