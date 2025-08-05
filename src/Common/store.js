import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import menuSlice from "../features/menuSlice";
// import accountSlice from "features/Account/accountSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "menu"
],
  blacklist: [
    // "menu",
  ],
};

const reducers = combineReducers({
    menu: menuSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

// export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: getDefaultMiddleware({
//         immutableCheck: false,
//         serializableCheck: false,
//     }),
// });


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});