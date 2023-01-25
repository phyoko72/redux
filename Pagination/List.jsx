import { memo } from "react";

const List = ({data}) => {
    console.log('\nList Rendered');
    return ( 
        <>
            <ul style={{listStyleType:'none'}}>
                {data.map(x=>(
                    <li key={x.id} style={{border:'1px solid white', padding:'10px',textAlign:'center'}}> {x.content} </li>
                ))}
            </ul>

        </>
     );
}
 
export default memo(List);