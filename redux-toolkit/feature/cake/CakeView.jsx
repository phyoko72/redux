import { useDispatch, useSelector } from "react-redux";
import cakeSlice from "./cakeSlice";

const CakeView = () => {

    const cake = useSelector(state=>state.cake.numOfCakes)   
    
    const dispatch = useDispatch()

    return ( 
        <>
            <h2> Number of Cake: {cake} </h2>
            <button onClick={()=>dispatch(cakeSlice.actions.ordered())}>Order Cake</button>
            <button onClick={()=>dispatch(cakeSlice.actions.restocked(5))}>Restock Cake</button>
        </>
     );
}
 
export default CakeView;