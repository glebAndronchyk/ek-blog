import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axiosInstance from '../../services/axiosService';

const initialState = {
  data: [],
  initialLoading: 'loading',
  additionalLoading: 'idle',
  page: 2,
};

export const getInitialData = createAsyncThunk(
  'posts/getInitialData',
  async () => {
    const response = await axiosInstance.get(
      `/posts?_page=1&_limit=5`, //
    );
    return response.data;
  },
);

export const getAdditionalData = createAsyncThunk(
  'posts/getAdditionalData',
  async pageNumber => {
    const response = await axiosInstance.get(
      `/posts?_page=${pageNumber}&_limit=5`,
    );
    console.log(response);
    return response.data;
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
        state.additionalLoading = 'idle';
        state.page = ++state.page;
        state.data = [...state.data, ...action.payload];
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
