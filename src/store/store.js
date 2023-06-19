import { rootReducer } from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { AppAPI } from './appAPI';

const store = configureStore({
  reducer: {
    rootReducer,
    [AppAPI.reducerPath]: AppAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AppAPI.middleware),
});

setupListeners(store.dispatch);
export default store;
