import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos : [],
}

const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state,action)=>{
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo);
        },
       removeTodo : (state,action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload);
       },
       editTodo : (state,action)=>{
            state.todos = state.todos.filter((todo)=> {
                if(todo.id == action.payload.id)
                {  
                    todo.text = action.payload.text;
                }
                return todo
            })
       },
       clearAllTodo : (state,action)=>{
          state.todos = action.payload;
       }
    }    
});



export const {addTodo,removeTodo,editTodo,clearAllTodo} = todoSlice.actions;
export default todoSlice.reducer;