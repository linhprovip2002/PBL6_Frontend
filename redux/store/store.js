import {
  authSlice,
  cartSlice,
  modalSlice,
  productSlice,
  orderSlice,
} from "@redux/reducers";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  auth: authSlice,
  cart: cartSlice,
  product: productSlice,
  modal: modalSlice,
  order: orderSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

// export type RootState = ReturnType<typeof store.getState>;
