import { createSlice } from "@reduxjs/toolkit"
import cakeSlice from "../cake/cakeSlice";

const initialState = {
    numOfIceCream : 20
}

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers:{
        ordered: (state,action)=>{
            state.numOfIceCream -= action.payload
        },
        restocked: (state,action)=>{
            state.numOfIceCream += action.payload
        }
    },
    extraReducers: (builder)=>{
        builder.addCase( cakeSlice.actions.ordered,(state)=>{
            state.numOfIceCream--
        })
    }
});

export default iceCreamSlice

