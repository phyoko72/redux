import { useEffect, useState } from "react";
import DocTitle from "./DocTitle";
import useDocumentTitle from "./useDocumentTitle";

const Home = () => {

    const [isDisplay, setIsDisplay] = useState(false);

    const aa = useDocumentTitle()

    console.log('AA: ',aa);

    useEffect(()=>{
        document.title = 'Count '+ aa.count
    },[aa.count])



    return ( 
        <>
            <h1>Custom Hooks Home</h1>
            <DocTitle/>
            <button onClick={aa.plus} >Count</button>
        </>
     );
}
 
export default Home;