import { combineReducers, configureStore } from '@reduxjs/toolkit';
import sessionSlice from './slices/sessionSlice';

const rootReducer = combineReducers({
  session: sessionSlice,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'];

let store: AppStore;

export default function getStore() {
  if (!store) {
    store = setupStore();
  }

  return store;
}
