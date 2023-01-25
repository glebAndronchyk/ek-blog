import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getItemFromStorage, setItemToStorage, clearStorage } from 'helpers/localStorage';
import { login } from 'services/authService';
import { IDLE, LOADING, REJECTED } from 'helpers/loadingStatus';

const initialState = {
  isAuth: !!getItemFromStorage(),
  error: false,
  loading: IDLE,
};

export const tryToLogin = createAsyncThunk(
  'user/tryTologin', //
  data => login(data),
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoggedOut: state => {
      state.isAuth = false;
      clearStorage();
    },
  },
  extraReducers: builder => {
    builder
      .addCase(tryToLogin.pending, state => {
        state.loading = LOADING;
      })
      .addCase(tryToLogin.fulfilled, (state, action) => {
        state.loading = IDLE;
        state.isAuth = true;
        state.error = false;
        setItemToStorage('token', action.payload.accessToken);
        setItemToStorage('userData', JSON.stringify(action.payload.user));
      })
      .addCase(tryToLogin.rejected, (state, action) => {
        state.loading = REJECTED;
        state.error = +action.error.message;
      });
  },
});

const { reducer, actions } = userSlice;
export const { userLoggedOut } = actions;
export default reducer;
