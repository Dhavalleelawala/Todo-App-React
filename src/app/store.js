import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todo/todoSlice"
const store = configureStore({
    reducer : {
        todo : todosReducer
    }
})

export default store;