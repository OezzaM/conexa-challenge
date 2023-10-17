"use client";

import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./reducer/postsReducer";

export const reducers = { postsReducer };

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
