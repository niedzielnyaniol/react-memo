import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

// eslint-disable-next-line import/no-cycle
import * as reducers from '../reducers';

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
