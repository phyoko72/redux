import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../../rtk/counter";
import cakeSlice from "../feature/cake/cakeSlice";
import iceCreamSlice from "../feature/icecream/icecreamSlice";
import storeSlice from "../store/storeSlice";
import userSlice from "../users/userSlice";

const store = configureStore({
    reducer:{
        cake: cakeSlice.reducer,
        iceCream: iceCreamSlice.reducer,
        users: userSlice.reducer,
        counter: counterSlice.reducer,
        store: storeSlice.reducer
    }
})

export default store;