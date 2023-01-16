import { useReducer, useState } from "react";

const initialValue = {
    count: 0
}

const reducer = (state,action)=>{

    console.log('\n\nstate of reducer: ',state);

    switch (action.type) {
        case "plus":
            return {...state,count: state.count + action.payload}
    
        default:
            return state
    }
}

const Reducer = () => {

    const [number, setNumber] = useState(0);

    console.log('useState: ',useState);

    const [state,dispatch] = useReducer(reducer,initialValue)

    console.log('\nWhat is useReducer: ',useReducer,'\n');
    console.log('dispatch: ',dispatch);

    // function increment(){
    //     setNumber(prev=>prev+1)
    // }

    // function decrement(){
    //     setNumber(prev=>prev-1)
    // }

    const incrementAction = () => ({type:"plus",payload:1})

    return ( 
        <>
            <h1> {state.count} </h1>
            <button >Decrement</button>

            <button onClick={()=>dispatch(incrementAction())}>Increment</button>
        </>
     );
}
 
export default Reducer;