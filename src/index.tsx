import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store, { persistor } from "./redux/store";
import { getStoredState, REHYDRATE } from "redux-persist";
import { persistedConfigs } from "./redux/slice";
import { appInitiated, firstLoadCompleted } from "./redux/slice/appSlice";
import { PersistedStateKeys } from "./types/store";
import { PersistGate } from "redux-persist/integration/react";

window.addEventListener("pageshow", () => {
  if (store.getState().app.firstLoadCompleted) {
    Object.keys(PersistedStateKeys).forEach((e1) => {
      getStoredState(persistedConfigs[e1 as PersistedStateKeys]).then((e2) => {
        store.dispatch({
          type: REHYDRATE,
          key: e1,
          payload: e2,
        });
      });
    });
    store.dispatch(appInitiated());
  } else {
    store.dispatch(firstLoadCompleted());
  }
});

const onBeforeLift = () => {
  if (!store.getState().app.appInitiated) {
    store.dispatch(appInitiated());
  }
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PersistGate persistor={persistor} onBeforeLift={onBeforeLift}>
      <App />
    </PersistGate>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
