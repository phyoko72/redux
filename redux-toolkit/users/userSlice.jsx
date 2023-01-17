import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    loading: false,
    users: [],
    error: ''
}

export const fetchUsers = createAsyncThunk('user/fetchUsers',async()=>{
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        return res.data.map(user=>user.id)
    }catch(err){
        console.log(err.message);
    }
})

const userSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchUsers.pending,(state)=>{
            state.loading = true
        })

        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading = false
            state.users = action.payload
            state.error = ''
        })

        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
    }
})

export default userSlice