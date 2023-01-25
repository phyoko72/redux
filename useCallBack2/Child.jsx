import { memo, useState } from "react";

const Child = () => {
    
    const [num, setNum] = useState(0);

    console.log('Child Component is rendered!!!');

    return ( 
        <>
            <h1>Child </h1>
            <button onClick={()=>setNum(num+1)}>Count: {num}</button>
        </>
     );
}
 
export default memo(Child);