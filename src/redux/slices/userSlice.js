import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { clearStorage, getTokenFromStorage, setItemsToStorage } from 'helpers/localStorage';
import { login, register } from 'services/authService';
import { IDLE, LOADING, REJECTED } from 'helpers/loadingStatus';

const initialState = {
  isAuth: !!getTokenFromStorage(),
  error: false,
  loading: IDLE,
};

export const tryToLogin = createAsyncThunk(
  'user/tryTologin', //
  data => login(data),
);

export const tryToRegister = createAsyncThunk(
  'user/tryToRegister', //
  data => register(data),
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
        setItemsToStorage([
          {
            name: 'token',
            value: action.payload.accessToken,
          },
          {
            name: 'userData',
            value: JSON.stringify(action.payload.user),
          },
        ]);
      })
      .addCase(tryToLogin.rejected, (state, action) => {
        state.loading = REJECTED;
        state.error = JSON.parse(action.error.message);
      })
      .addCase(tryToRegister.pending, state => {
        state.loading = LOADING;
      })
      .addCase(tryToRegister.fulfilled, (state, action) => {
        state.loading = IDLE;
        state.isAuth = true;
        state.error = false;
        setItemsToStorage([
          {
            name: 'token',
            value: action.payload.accessToken,
          },
          {
            name: 'userData',
            value: JSON.stringify(action.payload.user),
          },
        ]);
      })
      .addCase(tryToRegister.rejected, (state, action) => {
        state.loading = REJECTED;
        state.error = JSON.parse(action.error.message);
      });
  },
});

const { reducer, actions } = userSlice;
export const { userLoggedOut } = actions;
export default reducer;
