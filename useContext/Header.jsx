import { useContext } from "react";
import { DataContext } from "./userContext";


const Header = () => {
    const data = useContext(DataContext)
    console.log('Header Data: ',data);
    return ( 
        <>
            <h2>Hi! "{data.name}" </h2>
            <hr />
        </>
     );
}
 
export default Header;