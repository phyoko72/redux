import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    loading: false,
    products: [],
    error: ''
}

export const fetchStore = createAsyncThunk('store/fetchStore',async()=>{
    const res = await axios.get('https://fakestoreapi.com/products')
    return res.data
})

const storeSlice = createSlice({
    name:'store',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchStore.pending,(state)=>{
            state.loading = true
        })

        builder.addCase(fetchStore.fulfilled,(state,action)=>{
            state.loading = false
            state.products = action.payload
        })

        builder.addCase(fetchStore.rejected,(state,action)=>{
            state.loading = false
            state.products = []
            state.error = action.error.message
        })
    }
})

export default storeSlice