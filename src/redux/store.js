import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
    persistStore, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import logger from "redux-logger";
import phonebookReducer from './phonebook/phonebook-reducer';
import authReducer from './auth/auth-slice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

// import { composeWithDevTools } from 'redux-devtools-extension';

const AuthPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'user'],
};

const ContactsPersistConfig = {
  key: 'Contacts',
  storage,
};

const rootReduser = combineReducers({
  contacts: persistReducer(ContactsPersistConfig, phonebookReducer),
  auth: persistReducer(AuthPersistConfig, authReducer),  
});

export const store = configureStore({
    reducer: rootReduser,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

export const persistor = persistStore(store);




