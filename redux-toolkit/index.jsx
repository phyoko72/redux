import store from "./app/store";
import cakeSlice from "./feature/cake/cakeSlice";
import iceCreamSlice from "./feature/icecream/icecreamSlice";
import { fetchUsers } from "./users/userSlice";

const {actions} = cakeSlice


const RTK = () => {

    console.log("Initial State: ",store.getState())

    const unsubscribe = store.subscribe(()=>{
        console.log("Updated State: ",store.getState())
    })
    
    // store.dispatch(actions.ordered())
    // store.dispatch(actions.ordered())
    // store.dispatch(actions.restocked(5))
    store.dispatch( fetchUsers() )


    // store.dispatch(iceCreamSlice.actions.ordered(2))

    // unsubscribe()

    return ( 
        <>
            <h1>Tool Kit</h1>
        </>
     );
}
 
export default RTK;