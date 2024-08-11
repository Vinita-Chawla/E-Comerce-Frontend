import { combineReducers, configureStore } from "@reduxjs/toolkit";
import itemSlice from "./slices/itemSlice";
import {persistReducer, persistStore} from "redux-persist"
import storage from "redux-persist/lib/storage";
import cartSlice from "./slices/cartSlice";

const persistConfig = {
    key:"root",
    whitelist:["cart"],
    storage
}
const reducer = combineReducers({
    items:itemSlice,
    cart:cartSlice
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer:persistedReducer
})

export const persistor = persistStore(store)