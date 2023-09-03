"use client";

import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import cartSlice from "./slices/cart";

const config = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  cart: cartSlice,
});

const reducer = persistReducer(config, reducers);

export const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
