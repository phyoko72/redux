import { useContext, useRef, useState } from "react";
import { DataContext } from "./userContext";

const MainContent = () => {

    const data = useContext(DataContext)

    console.log('MainContent: ',data);

    const inputRef = useRef()

    const [username, setUsername] = useState('');

    const handleChange = e => setUsername(e.target.value)

    const handleSubmit = e =>{
        e.preventDefault()
        data.setName(username)
        console.log(inputRef.current.onFocus);
    }

    return ( 
        <>
            <h1>Main Content </h1>
            <form action="" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="username" 
                    id="" 
                    value={username} 
                    onChange={handleChange}
                    ref={inputRef}
                />
                <br />
                <button>Submit</button>
            </form>
        </>
     );
}
 
export default MainContent;