/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import User from '../types/User';

const KEY = '__username';

const initialState: User = {
  name: localStorage.getItem(KEY) || '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
      localStorage.setItem(KEY, action.payload);
    },
  },
});

export const { setName } = userSlice.actions;

export default userSlice.reducer;
