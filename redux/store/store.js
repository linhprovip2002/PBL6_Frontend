import AsyncStorage from "@react-native-async-storage/async-storage";
import { authSlice } from "@redux/reducers";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  auth: authSlice,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
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
