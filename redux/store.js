import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./userApi";


const reduxStore = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: def => [...def(), userApi.middleware]
})

export default reduxStore