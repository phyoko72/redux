import { configureStore } from "@reduxjs/toolkit";
import cakeSlice from "../feature/cake/cakeSlice";
import iceCreamSlice from "../feature/icecream/icecreamSlice";
import userSlice from "../users/userSlice";

const store = configureStore({
    reducer:{
        cake: cakeSlice.reducer,
        iceCream: iceCreamSlice.reducer,
        users: userSlice.reducer
    }
})

export default store;