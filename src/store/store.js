import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice"
import tableReducer from "./reducers/tableSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        table: tableReducer
    }
})