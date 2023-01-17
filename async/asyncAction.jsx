import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import axios from 'axios';

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

const fetchUserRequest = () => ({
    type: FETCH_USERS_REQUESTED
})

const fetchUserSucceeded = (users) => ({
    type: FETCH_USERS_SUCCEEDED,
    payload: users
})

const fetchUserFailed = (error) => ({
    type: FETCH_USERS_FAILED,
    payload: error
})

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_USERS_REQUESTED:
            return { ...state,loading: true }
        case FETCH_USERS_SUCCEEDED:
            return { ...state, loading: false, users: [...action.payload] }
        case FETCH_USERS_FAILED:
            return { ...state, loading: false, error: action.payload }
    }
};

const fetchingUserRequest = () =>{
    return async function(dispatch){
        try {
            dispatch(fetchUserRequest())
            const res = await axios.get('https://jsonplaceholder.typicode.com/user')
            const users = res.data.map(user=>user.id)
            dispatch(fetchUserSucceeded(users))
        } catch (error) {
            dispatch(fetchUserFailed(error.message))
        }
    }
}

const store = createStore(reducer,applyMiddleware(thunk))

store.subscribe(()=>{
    console.log('GetState: ',store.getState());
})

store.dispatch(fetchingUserRequest())


const AsyncAction = () => {
    return ( <>
                <h1>Async Action</h1>
            </> 
        );
}
 
export default AsyncAction;