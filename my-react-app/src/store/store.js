import { configureStore } from "@reduxjs/toolkit";
import tacheReducer from "../reducer/rootReducer";

const store = configureStore({
    reducer: tacheReducer,
    devtools: true,
  });
  export default store;
