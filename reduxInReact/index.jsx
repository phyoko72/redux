import { createStore } from "redux"

export function increment(number){
    return {
        type:"INCREMENT",
        payload: number
    }
}

export function decrement(number){
    return {
        type:"DECREMENT",
        payload: number
    }
}

function countReducer(count=0,action){
    switch(action.type){
        case "INCREMENT":
            return count + action.payload
        case "DECREMENT":
            return count - action.payload
        default:
            return count
    }
}

const store = createStore(countReducer)

store.subscribe(()=>{
    console.log('GetState: ',store.getState());
})

export default store;

// https://react-redux.js.org/api/connect#connect