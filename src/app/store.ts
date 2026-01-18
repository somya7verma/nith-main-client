import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './langslice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      language: languageReducer,
    },
  });
};

// Types for TypeScript
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
