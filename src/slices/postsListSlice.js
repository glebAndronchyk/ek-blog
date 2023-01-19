import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axiosInstance from '../services/axiosService';

const loading = 'loading';
const idle = 'idle';
const rejected = 'rejected';

const initialState = {
  data: [],
  initialLoading: loading,
  additionalLoading: idle,
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
  },
  extraReducers: builder => {
    builder
      .addCase(getInitialData.fulfilled, (state, action) => {
        state.showLoadMoreButton = action.payload.length > 0;
        state.initialLoading = idle;
        state.data = action.payload;
      })
      .addCase(getInitialData.rejected, state => {
        state.initialLoading = rejected;
      })
      .addCase(getAdditionalData.pending, state => {
        state.additionalLoading = loading;
      })
      .addCase(getAdditionalData.fulfilled, (state, action) => {
        state.showLoadMoreButton = action.payload.length > 0;
        state.additionalLoading = idle;
        state.page = ++state.page;
        state.data = [...state.data, ...action.payload];
      })
      .addCase(getAdditionalData.rejected, state => {
        state.additionalLoading = rejected;
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
