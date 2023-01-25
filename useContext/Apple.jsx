import { createContext, useState } from "react";
import Banana from "./Banana";

export const MyContext = createContext()
const Apple = () => {

    const word = 'Hello World';

    const [count, setCount] = useState(0);

    return ( 
        <>
            <h1>This is Apple</h1>
            <MyContext.Provider value={{count,setCount,word}}>
                <Banana/>
            </MyContext.Provider>
            
        </>
     );
}

export default Apple;