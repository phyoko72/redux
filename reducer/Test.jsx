import { useState ,useReducer } from "react";

const initialValue = {
    count: 0,
    toDoList: []
}

const reducer = (state,action) => {

    console.log('State of Reducer: ',state);

    switch (action.type) {

        case "INCREMENT":
            return {...state,count: state.count + action.payload}

        case "DECREMENT":
            return {...state,count: state.count - action.payload}

        case "ADD_TO_LIST":
            return { ...state,toDoList:[...state.toDoList, action.payload] }

        default:
            return state
    }
}

const Test = () => {

    const [state,dispatch] = useReducer(reducer,initialValue)

    console.log('\nWhat is reducer: ',reducer,'\n');

    const [input, setInput] = useState('');

    const increment = () => ({type:"INCREMENT",payload:1}) 

    // action
    const addToList = (input) => ({
        type:"ADD_TO_LIST",
        payload: { id: state.toDoList.length, list: input } 
    })

    const handleSubmit = e =>{
        e.preventDefault()
                 // action
        dispatch(addToList(input))

        setInput('')

        console.log("toDoList: ", state.toDoList );
    }

    const handleChange = e =>{
        console.log(e.target.value);
        setInput(e.target.value)
    }

    return ( 
        <>
            <h1>Testing</h1>
            <h1> {state.count} </h1>

            <button onClick={()=>dispatch(increment())}>Increment</button>

            <hr />

            <form action="" onSubmit={(e)=>handleSubmit(e)}>
                <input 
                    type="text" 
                    name="toDo" 
                    id="" 
                    placeholder="Enter To Do"
                    value={input}
                    onChange={(e)=>handleChange(e)} 
                />
                <button>Submit</button>
            </form>
            <hr />
            <ul>
                {state.toDoList.map(x=> <li key={x.id} > {x.list} </li> )}
            </ul>
        </>
     );
}
 
export default Test;