// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import recipeSlice from './recipeSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [ 'recipes','cart'],
};

const rootReducer = combineReducers({
  cart: cartSlice,
  recipes: recipeSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['FLUSH', 'REHYDRATE', 'PAUSE', 'PERSIST', 'PURGE', 'REGISTER'],
      },
    }),
});

const persistor = persistStore(store);

export  { store, persistor };
