import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import reducer from "../store/index";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};
const presistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(presistedReducer);
const persistor = persistStore(store);
export { persistor, store };
