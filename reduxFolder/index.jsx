import { combineReducers, createStore } from "redux";
import countReducer from "./count";
import favThingsReducer from "./favThings";
import youtubeReducer from "./youtubeVideo";

const rootReducer = combineReducers({
    count: countReducer,
    favThings: favThingsReducer,
    youTube: youtubeReducer
})

const store = createStore(rootReducer)

store.subscribe(()=>{
    console.log('GetState: ',store.getState());
})


export default store