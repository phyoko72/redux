import { useCallback, useState } from "react";
import Child from "./Child";

const UseCallBack2 = () => {
    
    const [count, setCount] = useState(0)

    console.log('Parent Component is rendered!!!');

    return ( 
        <>
            <h1>UseCallBack2</h1>
            <button onClick={()=>setCount(count+1)}>Count: {count}</button>
            <hr />
            <Child/>
        </>
     );
}
 
export default UseCallBack2;