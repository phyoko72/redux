import { useEffect, useState } from "react";
import arr from "./data";
import List from "./List";
import PageNumber from "./PageNumber";

const Pagination = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        console.log('Arr: ',arr);
    },[])

    const [username, setUsername] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(10);

    const indexOfLastPost = currentPage * postPerPage;

    const indexOfFirstPost = indexOfLastPost - postPerPage;

    const currentPost = arr.slice(indexOfFirstPost,indexOfLastPost)

    const changeCurrentPage = (pageNumber) => setCurrentPage(pageNumber)
    
    console.log('Last: ',indexOfLastPost,' / first: ',indexOfFirstPost,' / current: ');

    return ( 
        <>
            <h1>Pagination</h1>

            <input type="text" name="username" id="" value={username} onChange={(e)=>setUsername(e.target.value)} />

            <br />
            <PageNumber totalPage={arr.length} postPerPage={postPerPage} changeCurrentPage={changeCurrentPage} currentPage={currentPage}/>

            {
                indexOfFirstPost>0 &&
                <button onClick={()=>setCurrentPage(prev=>prev-1)}>Prev</button>
            }
                   
            <button 
                disabled={indexOfLastPost >= arr.length} 
                onClick={()=>setCurrentPage(prev=>prev+1)
                }>Next</button>

            <List data={currentPost} />


            
        </>
     );
}
 
export default Pagination;