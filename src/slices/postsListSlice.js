import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axiosInstance from '../services/axiosService';

const initialState = {
  data: [],
  initialLoading: 'loading',
  additionalLoading: 'idle',
  showLoadMoreButton: false,
  page: 2,
};

export const getInitialData = createAsyncThunk(
  'posts/getInitialData',
  async () => {
    const params = { _page: 1, _limit: 10 };
    const response = await axiosInstance.get('/posts', { params });
    return response.data.filter(item => item.body);
  },
);

export const getAdditionalData = createAsyncThunk(
  'posts/getAdditionalData',
  async pageNumber => {
    const params = { _page: pageNumber, _limit: 10 };
    const response = await axiosInstance.get('/posts', { params });
    return response.data.filter(item => item.body);
  },
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
  },
  extraReducers: builder => {
    builder
      .addCase(getInitialData.fulfilled, (state, action) => {
        state.showLoadMoreButton = action.payload.length > 0;
        state.initialLoading = 'idle';
        state.data = action.payload;
      })
      .addCase(getInitialData.rejected, state => {
        state.initialLoading = 'rejected';
      })
      .addCase(getAdditionalData.pending, state => {
        state.additionalLoading = 'loading';
      })
      .addCase(getAdditionalData.fulfilled, (state, action) => {
        state.showLoadMoreButton = action.payload.length > 0;
        state.additionalLoading = 'idle';
        state.page = ++state.page;
        state.data = [...state.data, ...action.payload];
      })
      .addCase(getAdditionalData.rejected, state => {
        state.additionalLoading = 'rejected';
      });
  },
});

const { reducer } = postsListSlice;
export default reducer;

// TODO: ADD AND REMOVE POSTS
// export const {
//   postAdded,
//   postDeleted,
// } = actions
