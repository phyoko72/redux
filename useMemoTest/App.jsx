import { useEffect, useMemo, useState } from "react";

const otherFunction = () => {
    const num = Math.random()*100
    console.log('This is other function!', num)
    return 'Some value ' + num
};

const App = () => {
    const [random, setRandom] = useState(0);

    // useEffect(()=>{
    //     otherFunction()
    // },[])

    const value = useMemo(()=>{
        console.log('useMemo Hook');
        return otherFunction()
    },[])

    console.log('value: ',value);
    
    return ( 
        <>
            <h1>Use Memo</h1>
            <h3>Number: {random} </h3>
            <button onClick={()=>setRandom(Math.random()*1000)} >Random</button>
        </>
     );
}
 
export default App;