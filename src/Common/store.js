import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
// import accountSlice from "features/Account/accountSlice";

const persistConfig = {
    key: "root",
    storage,
    // whitelist: ["risk"],
    blacklist: [
        "account",
    ],
};

// const reducers = combineReducers({
    // account: accountSlice.reducer,
// });

// const persistedReducer = persistReducer(persistConfig, reducers);

// export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: getDefaultMiddleware({
//         immutableCheck: false,
//         serializableCheck: false,
//     }),
// });
