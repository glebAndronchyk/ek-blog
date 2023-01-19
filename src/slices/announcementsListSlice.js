import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axiosInstance from '../services/axiosService';
import { LOADING, IDLE, REJECTED } from '../helpers/loadingStatus';

const initialState = {
  data: [],
  initialLoading: LOADING,
  additionalLoading: IDLE,
  showLoadMoreButton: false,
  page: 2,
};

const receiveData = async (pageNumber = 1) => {
  const params = { _page: pageNumber, _limit: 10 };
  const response = await axiosInstance.get('/announcements', { params });
  return response.data.filter(item => item.body);
};

export const getInitialData = createAsyncThunk(
  'announcements/getInitialData', //
  () => receiveData(),
);

export const getAdditionalData = createAsyncThunk(
  'announcements/getAdditionalData',
  pageNumber => receiveData(pageNumber),
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
