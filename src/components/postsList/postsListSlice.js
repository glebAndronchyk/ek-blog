import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../services/axiosService';

const initialState = {
  data: [],
  dataLoading: 'loading',
};

export const getData = createAsyncThunk(
  'posts/getData', //
  async () => {
    const response = await axiosInstance.get('/posts?_page=1&_limit=5');
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
      .addCase(getData.pending, state => {
        state.dataLoading = 'loading';
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.dataLoading = 'idle';
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
