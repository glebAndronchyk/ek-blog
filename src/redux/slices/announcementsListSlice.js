import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { LOADING, IDLE, REJECTED } from 'helpers/loadingStatus';
import { createNews, deleteNews, editNews, getNews, getUserRelatedNews } from 'services/newsService';
import { getAdditionalPostsData } from 'redux/slices/postsListSlice';

const initialState = {
  data: [],
  initialLoading: LOADING,
  additionalLoading: IDLE,
  userActionLoading: IDLE,
  showLoadMoreButton: false,
  page: 2,
};

export const getInitialData = createAsyncThunk(
  'announcements/getInitialData', //
  () => getNews('announcements'),
);

export const getInitialUserRelatedData = createAsyncThunk(
  'announcements/getInitialUserRelatedData', //
  () => getUserRelatedNews('announcements'),
);

export const getAdditionalAnnouncementsData = createAsyncThunk(
  'announcements/getAdditionalData', //
  pageNumber => getNews('announcements', pageNumber),
);

export const getUserRelatedAdditionalAnnouncementsData = createAsyncThunk(
  'announcements/getUserRelatedAdditionalAnnouncementsData', //
  pageNumber => getUserRelatedNews('announcements', pageNumber),
);

export const tryToCreateAnnouncement = createAsyncThunk(
  'announcements/tryToPostNews', //
  data => createNews('announcements', data),
);

export const tryToEditAnnouncement = createAsyncThunk(
  'announcements/tryToEditNews', //
  ([data, id]) => editNews('announcements', data, id),
);

export const tryToDeleteAnnouncement = createAsyncThunk(
  'announcements/tryToDeletePost', //
  id => deleteNews(`announcements/${id}`),
);

const announcementsListSlice = createSlice({
  name: 'announcements',
  initialState,
  reducers: {
    announcementsStateReseted: () => {
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
      .addCase(getInitialUserRelatedData.fulfilled, (state, action) => {
        state.showLoadMoreButton = action.payload.length > 0;
        state.initialLoading = IDLE;
        state.data = action.payload;
      })
      .addCase(getAdditionalPostsData.pending, state => {
        state.additionalLoading = LOADING;
      })
      .addCase(getAdditionalAnnouncementsData.pending, state => {
        state.additionalLoading = LOADING;
      })
      .addCase(getAdditionalAnnouncementsData.fulfilled, (state, action) => {
        state.showLoadMoreButton = action.payload.length > 0;
        state.additionalLoading = IDLE;
        state.page = ++state.page;
        state.data = [...state.data, ...action.payload];
      })
      .addCase(getAdditionalAnnouncementsData.rejected, state => {
        state.additionalLoading = REJECTED;
      })
      .addCase(getUserRelatedAdditionalAnnouncementsData.pending, state => {
        state.additionalLoading = LOADING;
      })
      .addCase(getUserRelatedAdditionalAnnouncementsData.fulfilled, (state, action) => {
        state.showLoadMoreButton = action.payload.length > 0;
        state.additionalLoading = IDLE;
        state.page = ++state.page;
        state.data = [...state.data, ...action.payload];
      })
      .addCase(getUserRelatedAdditionalAnnouncementsData.rejected, state => {
        state.additionalLoading = REJECTED;
      })
      .addCase(tryToCreateAnnouncement.fulfilled, (state, action) => {
        state.userActionLoading = IDLE;
        state.data = [{ ...action.payload }, ...state.data];
      })
      .addCase(tryToCreateAnnouncement.rejected, state => {
        state.userActionLoading = REJECTED;
      })
      .addCase(tryToDeleteAnnouncement.pending, state => {
        state.userActionLoading = LOADING;
      })
      .addCase(tryToDeleteAnnouncement.fulfilled, (state, action) => {
        state.userActionLoading = IDLE;
        state.data = state.data.filter(item => item.id !== action.meta.arg);
      })
      .addCase(tryToDeleteAnnouncement.rejected, state => {
        state.userActionLoading = REJECTED;
      })
      .addCase(tryToEditAnnouncement.pending, state => {
        state.userActionLoading = LOADING;
      })
      .addCase(tryToEditAnnouncement.fulfilled, (state, action) => {
        const { data } = state;
        const { payload } = action;
        const changedElementIndex = data.findIndex(element => element.id === payload.id);
        data[changedElementIndex] = { ...data[changedElementIndex], title: payload.title, body: payload.body };
        state.userActionLoading = IDLE;
      })
      .addCase(tryToEditAnnouncement.rejected, state => {
        state.userActionLoading = REJECTED;
      });
  },
});

const { reducer, actions } = announcementsListSlice;
export default reducer;
export const { announcementsStateReseted } = actions;
