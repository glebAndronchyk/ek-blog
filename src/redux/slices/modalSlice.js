import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isShown: false,
};

const modalSLice = createSlice({
  name: 'modal',
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

const { reducer, actions } = modalSLice;
export const { modalOpened, modalClosed } = actions;
export default reducer;
