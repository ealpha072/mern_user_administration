import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postUser = createAsyncThunk(
    'user/register', 
    async(data, thunkAPI) => {
        let response = await axios.post('http://localhost:5000/users/register', data)
        return response.data
    }
)

export const loginUser = createAsyncThunk(
    'user/login',
    async(data, thunkAPI) => {
        let response = await axios.post('http://localhost:5000/users/login', data)
        return response.data
    }
)

export const userSlice = createSlice({
    name:'user',
    initialState:{
        userDetails:{},
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: "",
        isLoggedin:false
    },
    reducers:{
        clearState: (state) =>{
            state.isFetching = false
            state.isSuccess = false
            state.isError = false
            return state
        },
        logout: (state) =>{
            state.userDetails = {}
            state.isFetching = false
            state.isSuccess = false
            state.isError = false
            state.errorMessage = ""
            state.isLoggedin =false
        }
    },
    extraReducers:{
        [loginUser.pending]:(state) => {
            state.isFetching = true
        },
        [loginUser.fulfilled]: (state, {payload}) => {
            console.log(payload)
            state.isFetching = false
            state.isSuccess = true
            if(payload.error){
                state.isError = true
                state.errorMessage = payload.error
            }else{
                state.userDetails = payload
                state.isLoggedin = true
                state.errorMessage = false
            }
            return state
        },
        [loginUser.rejected]: (state, {payload}) => {
            state.isFetching = false
            state.isSuccess = false
            state.isError = true
            state.errorMessage = payload.message
        }
    }
})


export const {clearState, logout} = userSlice.actions
export const userSelector = state => state.user

