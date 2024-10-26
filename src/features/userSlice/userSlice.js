import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:[]
}

const userSlice = new createSlice({
    name :'user',
    initialState,
    reducers:{
        signupUser:(state,action)=>{
            
        }
    }
})