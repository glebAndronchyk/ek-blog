import { createSlice } from '@reduxjs/toolkit';

import { IDLE } from 'helpers/loadingStatus';

const initialState = {
  loading: IDLE,
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {},
});

const { reducer } = registrationSlice;
export default reducer;
