import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = cartSlice 

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
