"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { persistStore } from "redux-persist";
import { store } from "./store";

let persistor = persistStore(store);

export function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
