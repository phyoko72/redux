import { useContext } from "react";
import { MyContext } from "./Apple";

const Cup = () => {
    const num = useContext(MyContext)
    console.log("What's num: ",num);
    return ( 
        <>
            <h1>This is Cup</h1>
            <button>-</button> <span> {num.count} </span> <button>+</button>
        </>
     );
}
 
export default Cup;