import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isShown: false,
  contentToShow: null,
  configuration: null,
};

const modalSLice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalClosed: state => {
      state.contentToShow = null;
      state.configuration = null;
      state.isShown = false;
    },
    modalOpened: (state, action) => {
      state.contentToShow = action.payload.name;
      state.configuration = action.payload.configuration;
      state.isShown = true;
    },
  },
});

const { reducer, actions } = modalSLice;
export const { modalOpened, modalClosed } = actions;
export default reducer;
