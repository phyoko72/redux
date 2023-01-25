import { useEffect, useRef, useState } from "react";

const Ref = () => {

    const [list, setList] = useState([]);

    const [toDo, setToDo] = useState('');

    const inputRef = useRef()

    const handleChange = e => {
        console.log('Change: ',e.target.value);
        setToDo(e.target.value)
    }

    const handleSubmit = () => {
        setList([...list,inputRef.current.value])
        // setToDo([])
        inputRef.current.focus()
        inputRef.current.value = ''
        console.log('inputRef: ',inputRef.current.value);
    }

    console.log('List: ',list);

    console.log('\nRender Test\n');

    return ( 
        <>
            <h1>Using Ref</h1>
            <input 
                type="text" 
                name="todo" 
                id="todo"
                // value={toDo}
                ref={inputRef}
                // onChange={handleChange} 
                placeholder="Add Things To Do"/>
            <br />
            <button onClick={handleSubmit} >Submit</button><br />

            <ol>
                {list.map((thing,index)=>(
                    <li key={index}>{thing} </li>
                ))}
            </ol>

        </>
     );
}
 
export default Ref;