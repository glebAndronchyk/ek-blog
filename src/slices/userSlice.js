import { createSlice } from '@reduxjs/toolkit';
import { getItemFromStorage } from '../helpers/localStorage';
import { IDLE, LOADING, REJECTED } from '../helpers/loadingStatus';

const initialState = {
  isAuth: !getItemFromStorage(),
  loginStatus: IDLE,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogging: state => {
      state.loginStatus = LOADING;
    },
    userLogged: state => {
      state.loginStatus = IDLE;
    },
    userRejected: state => {
      state.loginStatus = REJECTED;
    },
  },
});

const { reducer, actions } = userSlice;
export const { userLogged, userLogging, userRejected } = actions;
export default reducer;
