import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storageSession from "redux-persist/lib/storage/session";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import userReducer from "../feature/user.slice";
import authReducer from "../feature/auth.slice";

const rootPersistConfig = {
  key: "root",
  storage: storageSession,
};

// Special config to keep 'remember-me' option and user credential (username) in local storage
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["userName", "rememberMe"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  user: userReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

// Middleware: to avoid console errors
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
