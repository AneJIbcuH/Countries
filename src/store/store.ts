import { configureStore } from "@reduxjs/toolkit";
import { testApi } from "./testApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { countriesReducer } from "./testSlice";

export const store = configureStore({
  reducer: {
    [testApi.reducerPath]: testApi.reducer,
    favorites: countriesReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(testApi.middleware),
});

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>