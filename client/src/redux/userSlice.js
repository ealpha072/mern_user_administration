import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postUser = createAsyncThunk(
    'user/register', 
    async(data, thunkAPI) => {
        let response = await axios.post('http://localhost:5000/users/register', data)
        return response.data
    }
)

export const userSlice = createSlice({
    name:'user',
    initialState:{
        entities:[],
        loading:false
    },
    reducers:{

    },
    extraReducers:{
        [postUser.pending]:(state) => {
            state.loading = true
        },
        [postUser.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.entities = payload
        },
        [postUser.rejected]: (state, {payload}) => {
            state.loading = false
        }
    }
})

