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
  const response = await axiosInstance.get('/posts', { params });
  return response.data.filter(item => item.body);
};

export const getInitialData = createAsyncThunk(
  'posts/getInitialData', //
  () => receiveData(),
);

export const getAdditionalData = createAsyncThunk(
  'posts/getAdditionalData',
  pageNumber => receiveData(pageNumber),
);

const postsListSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: (state, action) => {
      state.data.push(action.payload);
    },
    postDeleted: (state, action) => {
      state.data = state.data.filter(item => item === action.payload);
    },
    stateReseted: state => {
      state.data = [];
      state.initialLoading = LOADING;
      state.additionalLoading = IDLE;
      state.showLoadMoreButton = false;
      state.page = 2;
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

const { reducer, actions } = postsListSlice;
export default reducer;

export const { stateReseted } = actions;

// TODO: ADD AND REMOVE POSTS
// export const {
//   postAdded,
//   postDeleted,
// } = actions
