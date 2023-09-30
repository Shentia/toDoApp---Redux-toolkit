import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employee";
import tasksReducer from "./tasks";
import error from "./middleware/error";
import api from "./middleware/api";

const store = configureStore({reducer:{tasks:tasksReducer,employess:employeeReducer},
middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api, error),})
export default store;