import { rootReducer } from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { userAPI } from './AppAPI/userAPI';
import { postAPI } from './AppAPI/postAPI';
import { todoAPI } from './AppAPI/todoAPI';

const store = configureStore({
  reducer: {
    rootReducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [postAPI.reducerPath]: postAPI.reducer,
    [todoAPI.reducerPath]: todoAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userAPI.middleware,
      postAPI.middleware,
      todoAPI.middleware
    ),
});

setupListeners(store.dispatch);
export default store;
