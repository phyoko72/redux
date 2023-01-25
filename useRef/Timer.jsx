import { useEffect, useRef, useState } from "react";

const Timer = () => {
    const [timer, setTimer] = useState(0);

    const intervalRef = useRef()

    console.log("Timer: ",timer);

    console.log('intervalRef.current: ',intervalRef);

    useEffect(()=>{
        intervalRef.current = setInterval(() => {
            setTimer(prev=>prev+1)
        }, 1000)
        return ()=> clearInterval(intervalRef.current)
    },[])

    return ( 
        <>
            <h1>Timer: {timer}  </h1>
            <button onClick={()=>clearInterval(intervalRef.current)}>Clear Interval</button>
        </>
    );
}
 
export default Timer;