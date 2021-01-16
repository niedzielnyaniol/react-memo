import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
  name: string;
};

const initialState: User = {
  name: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        name: action.payload,
      };
    },
  },
});

export const { setName } = userSlice.actions;
export default userSlice.reducer;