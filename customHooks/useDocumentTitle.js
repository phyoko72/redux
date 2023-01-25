import { useState } from "react";

const useDocumentTitle = () => {

    const [count, setCount] = useState(0);

    const plus = () => setCount(count=>count+1)

    console.log('Count Hook: ',count);

    return {count,plus}
}
 
export default useDocumentTitle;