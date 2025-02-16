import { configureStore } from '@reduxjs/toolkit';
import sessionSlice from './slices/sessionSlice';

const store = configureStore({
  reducer: {
    session: sessionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
