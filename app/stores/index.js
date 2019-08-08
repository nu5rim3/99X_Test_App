/* eslint-disable prettier/prettier */
import { applyMiddleware, createStore, compose } from "redux";
import AsyncStorage from "@react-native-community/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import reducers from '../reducers/index'; //Import the reducer

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(
  persistedReducer,
  undefined,
  compose(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);
