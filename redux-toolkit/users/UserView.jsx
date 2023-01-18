import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import userSlice, { fetchUsers } from "./userSlice";

const UserView = () => {
    
    const dispatch = useDispatch()

    const users = useSelector(state=>state.users)

    console.log('Users: ',users);

    useEffect(()=>{
        dispatch(fetchUsers())
    },[])

    return ( 
        <>
            <h2 style={{textDecoration:'underline'}}>List of Users</h2>

            { users.loading && <h1>Loading...</h1> }
            { users.loading && users.error ? <h3> {users.error} </h3>:'' }
            { users.loading && users.users.length ? 

                <ol>
                    {users.users.map(user=>(
                        <li key={user.id} style={{textAlign:'left'}}> {user.name} </li>
                    ))}
                </ol> :
                null
            }
            
        </>
     );
}
 
export default UserView;