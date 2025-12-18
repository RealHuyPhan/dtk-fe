import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import { helperApi } from "./helper/helperAction";
import helperReducer from "./helper/helperSlice";


const persistConfig = {
    key: "helper",
    storage,
    whitelist: ["helper"],
};

const rootReducer = combineReducers({
    hepler: helperReducer,

});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(
            helperApi.middleware,

        ),
});

export const persistor = persistStore(store);
export default store;