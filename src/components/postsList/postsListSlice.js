import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../services/axiosService';

const initialState = {
  data: [],
  dataLoading: 'idle',
};

export const getData = createAsyncThunk('posts/getData', async () => {
  return await axiosInstance('/posts');
});

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
      .addCase(getData.pending, state => {
        state.dataLoading = 'loading';
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.dataLoading = 'loaded';
        state.data = action.payload;
      })
      .addCase(getData.rejected, state => {
        state.dataLoading = 'rejected';
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
