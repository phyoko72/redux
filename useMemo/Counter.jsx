import { useState } from "react";

const Counter = () => {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);


    const incrementOne = () => setCounterOne(counterOne+1)
    const incrementTwo = () => setCounterTwo(counterTwo+1)

    return ( 
        <>
            <button onClick={incrementOne}>Counter One {counterOne} </button>
            <button onClick={incrementTwo}>Counter Two {counterTwo} </button>
        </>
     );
}
 
export default Counter;