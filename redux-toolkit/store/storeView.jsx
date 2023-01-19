import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../app/store";
import { fetchStore } from "./storeSlice";

const StoreView = () => {

    // console.log("Initial Store: ", store.getState() );

    // store.subscribe(()=>console.log("Updated StoreOfStore: ",store.getState()))

    // store.dispatch(fetchStore())

    const dispatch = useDispatch()
    const products = useSelector(state=>state.store)
    useEffect(()=>{
        dispatch(fetchStore())
    },[])

    console.log('Product: ',products);

    return ( 
        <div style={{width:'75%', margin:'auto'}}>
            <h2>Store Page</h2>
            { products.loading && <h1 style={{fontFamily:'monospace'}} > Loading . . .</h1> }
            { products.error ? <p style={{color:'red', fontWeight:'bold', fontStyle:'italic' }}> {products.error} </p> :
            <div style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
                {products.products.map(product=>(
                    <div key={product.id}>
                        <img src={product.image} alt="" width={100} height={100} />
                        <p> {product.category} </p>
                    </div>
                ))}
            </div>}
        </div>
     );
}
 
export default StoreView;