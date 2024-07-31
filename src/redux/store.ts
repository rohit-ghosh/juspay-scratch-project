import rootEpic from "./epic";
import rootReducer from "./slice";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";

const isProd = process.env.REACT_APP_ENV === "prod";

const epicMiddleware = createEpicMiddleware();

const rootPersistConfig = {
  key: "root",
  storage,
  blacklist: [
    "app",
    "location",
    "cart",
    "prices",
    "checkout",
    "auth",
    "profile",
  ],
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(epicMiddleware);
  },
  devTools: !isProd,
});

epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const { dispatch } = store;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const persistor = persistStore(store);

export default store;
