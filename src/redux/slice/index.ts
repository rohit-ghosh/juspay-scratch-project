import appSlice from "./appSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { PersistedConfigs, PersistedStateKeys } from "../../types/store";

export const persistedConfigs: PersistedConfigs = {
  [PersistedStateKeys.location]: {
    key: PersistedStateKeys.location,
    storage: storage,
    blacklist: ["status"],
  },
  [PersistedStateKeys.cart]: {
    key: PersistedStateKeys.cart,
    storage: storage,
    blacklist: ["cartModalConfig", "cartHeaderConfig", "loadingQuote", "quote"],
  },
  [PersistedStateKeys.checkout]: {
    key: PersistedStateKeys.checkout,
    storage: storage,
  },
  [PersistedStateKeys.prices]: {
    key: PersistedStateKeys.prices,
    storage: storage,
    blacklist: ["fetchPriceQueue", "priceCatalog"],
  },
};

// Persisted Reducers
// Note: Add persist config to persistReducer function using persistedConfigs object
const persistedReducers = {};

// Non persisted reducers
const nonPersistedReducers = {
  app: appSlice,
};

const rootReducer = combineReducers({
  ...persistedReducers,
  ...nonPersistedReducers,
});

export default rootReducer;
