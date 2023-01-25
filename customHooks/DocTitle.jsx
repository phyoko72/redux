import { useEffect, useState } from "react";

const DocTitle = () => {

    const [width, setWidth] = useState(window.innerWidth);


    function getWidth(){

        setWidth(window.innerWidth)
        console.log('Width: ', window.innerWidth )
    }

    useEffect(()=>{
        document.title = 'Count '
        window.addEventListener('resize',getWidth)
        return ()=>window.removeEventListener('resize',getWidth)
    },[])

    // getWidth()

    return ( 
        <>
            <h1>Windows Width: {width}</h1>
            <h2>Count:  </h2>
            <button>Plus</button>            
        </>
     );
}
 
export default DocTitle;