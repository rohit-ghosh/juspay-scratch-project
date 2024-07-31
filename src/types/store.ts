import { PersistConfig } from "redux-persist";

// TODO updat these keys
export enum PersistedStateKeys {
  location = "location",
  cart = "cart",
  prices = "prices",
  checkout = "checkout",
}

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export type PersistedConfigs = Record<PersistedStateKeys, PersistConfig<any>>;
