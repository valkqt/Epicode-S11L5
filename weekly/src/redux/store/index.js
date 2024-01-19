import mainReducer from "../reducers/index.js";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
  reducer: mainReducer,
});

export default store;
