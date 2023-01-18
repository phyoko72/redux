import { useDispatch, useSelector } from "react-redux";
import counterSlice from "./counter";

const CounterView = () => {

    const style = { display: 'inline-block', margin:'0 10px' }

    const num = useSelector(state=>state.counter.count)
    
    const dispatch = useDispatch()

    console.log(num);

    return ( 
        <>
            <button onClick={()=>dispatch( counterSlice.actions.decrement() )} >-</button>
                <h2 style={style}>Count: {num} </h2>
            <button onClick={()=>dispatch( counterSlice.actions.increment() )} >+</button>
        </>
    );
}
 
export default CounterView;