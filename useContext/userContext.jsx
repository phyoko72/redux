import { createContext, useState } from "react";

export const DataContext = createContext()

const DataProvider = (props) =>{

    console.log('CHildren: ',props);
    const [name, setName] = useState('Yamada');
    const [count, setCount] = useState(0);
    

    return(
        <DataContext.Provider value={{name,setName,count,setCount}}>
            {props.children}
        </DataContext.Provider>
    ) 
}

export default DataProvider