import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  clearStorage,
  getTokenFromStorage,
  removeItemFromStorage,
  setItemsToStorage,
  setItemToStorage,
} from 'helpers/localStorage';
import { login, register } from 'services/authService';
import editUserData from 'services/userService';
import { IDLE, LOADING, REJECTED } from 'helpers/loadingStatus';

const initialState = {
  isAuth: !!getTokenFromStorage(),
  error: false,
  loading: IDLE,
  dataChanged: false,
};

export const tryToLogin = createAsyncThunk(
  'user/tryTologin', //
  data => login(data),
);

export const tryToRegister = createAsyncThunk(
  'user/tryToRegister', //
  data => register(data),
);

export const tryToEditUserData = createAsyncThunk(
  'user/tryToEditUserData', //
  ([data, id]) => editUserData(data, id),
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoggedOut: state => {
      state.isAuth = false;
      clearStorage();
    },
    userProfileUnmounted: state => {
      state.dataChanged = false;
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
      })
      .addCase(tryToEditUserData.pending, state => {
        state.loading = LOADING;
      })
      .addCase(tryToEditUserData.fulfilled, (state, action) => {
        state.loading = IDLE;
        removeItemFromStorage('userData');
        setItemToStorage('userData', action.payload);
        state.dataChanged = !state.dataChanged;
      })
      .addCase(tryToEditUserData.rejected, state => {
        state.loading = REJECTED;
      });
  },
});

const { reducer, actions } = userSlice;
export const { userLoggedOut, userProfileUnmounted } = actions;
export default reducer;
