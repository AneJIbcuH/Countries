import { configureStore } from "@reduxjs/toolkit";
import { testApi } from "./testApi";

export const store = configureStore({
    reducer: {
        [testApi.reducerPath]: testApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(testApi.middleware)
})