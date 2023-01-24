import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getItemFromStorage, setItemToStorage } from '../helpers/localStorage';
import { login } from '../services/authService';
import { IDLE, LOADING, REJECTED } from '../helpers/loadingStatus';

const initialState = {
  isAuth: !!getItemFromStorage(),
  error: false,
  loading: IDLE,
};

export const tryToLogin = createAsyncThunk(
  'login/tryTologin', //
  data => login(data),
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
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
      })
      .addCase(tryToLogin.rejected, (state, action) => {
        state.loading = REJECTED;
        state.error = +action.error.message;
      });
  },
});

const { reducer, actions } = userSlice;
export default reducer;
