import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isShown: false,
};

const loginSLice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    modalOpenStateChanged: state => {
      state.isShown = !state.isShown;
    },
  },
});

const { reducer, actions } = loginSLice;
export const { modalOpenStateChanged } = actions;
export default reducer;
