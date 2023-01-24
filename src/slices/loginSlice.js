import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isShown: false,
};

const loginSLice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    modalClosed: state => {
      state.isShown = false;
    },
    modalOpened: state => {
      state.isShown = true;
    },
  },
});

const { reducer, actions } = loginSLice;
export const { modalOpened, modalClosed } = actions;
export default reducer;
