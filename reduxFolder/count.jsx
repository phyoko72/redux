export function increment(number=3){
    return {
        type:"INCREMENT",
        payload: number
    }
}

export default function countReducer(count=0,action){
    switch(action.type){
        case "INCREMENT":
            return count + action.payload
        default:
            return count
    }
}