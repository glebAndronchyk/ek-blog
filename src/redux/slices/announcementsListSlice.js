import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { LOADING, IDLE, REJECTED } from 'helpers/loadingStatus';
import { createNews, deleteNews, editNews, getNews } from 'services/newsService';

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

export const getAdditionalData = createAsyncThunk('announcements/getAdditionalData', pageNumber =>
  getNews('announcements', pageNumber),
);

export const tryToCreateAnnouncement = createAsyncThunk(
  'posts/tryToPostNews', //
  data => createNews('announcements', data),
);

export const tryToEditAnnouncement = createAsyncThunk(
  'posts/tryToEditNews', //
  ([data, id]) => editNews('announcements', data, id),
);

export const tryToDeleteAnnouncement = createAsyncThunk(
  '/posts/tryToDeletePost', //
  id => deleteNews(`announcements/${id}`),
);

const announcementsListSlice = createSlice({
  name: 'announcements',
  initialState,
  reducers: {
    announcementAdded: (state, action) => {
      state.data.push(action.payload);
    },
    announcementDeleted: (state, action) => {
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
export const { stateReseted } = actions;

// TODO: ADD AND REMOVE ANNOUNCEMENTS
// export const {
//   postAdded,
//   postDeleted,
// } = actions
