import { configureStore } from '@reduxjs/toolkit';
// Slice reducers
import appReducer from './features/appSlice';
// Services
import { bitcoinApi } from './services/app';

export const store = configureStore({
  reducer: {
    [bitcoinApi.reducerPath]: bitcoinApi.reducer,
    app: appReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(bitcoinApi.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
