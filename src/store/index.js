import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import localforage from "localforage";
import { persistStore, persistReducer } from "redux-persist";

import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage: localforage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunkMiddleware],
});

const persistor = persistStore(store);

export { store, persistor };
