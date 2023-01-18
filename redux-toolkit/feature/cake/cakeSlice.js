import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    numOfCakes: 10
}

const cakeSlice = createSlice({
    name: 'cakeSlice',
    initialState,
    reducers:{
        ordered: (state)=>{
            state.numOfCakes--
        },
        restocked: (state,action)=>{
            state.numOfCakes += action.payload
        }
    }
})

export default cakeSlice