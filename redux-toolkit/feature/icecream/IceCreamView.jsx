import { useDispatch, useSelector } from "react-redux";
import iceCreamSlice from "./icecreamSlice";

const IceCreamView = () => {

    const iceCream = useSelector(state=>state.iceCream.numOfIceCream)

    const dispatch = useDispatch()

    iceCreamSlice.actions.ordered

    return ( 
        <>
            <h2> Number of Ice-cream: {iceCream} </h2>
            <button onClick={()=>dispatch(iceCreamSlice.actions.ordered(1))}>Order Ice-cream</button>
            <button onClick={()=>dispatch(iceCreamSlice.actions.restocked(2))}>Restock Ice-cream</button>
        </>
     );
}
 
export default IceCreamView;