import store from "../reduxFolder"
import {increment} from "../reduxFolder/count"
import { setUserDetails } from "../reduxFolder/login";

const Redux01 = () => {
    
    // const reducer = function(state=initialState,action){
    //     switch(action.type){
    //         case "INCREMENT":
    //             return { ...state,count: state.count + action.payload }
    //         case "ADD_FAV_THING":
    //             return { ...state, favoriteThing: [...state.favoriteThing,action.payload] }
    //         case "REMOVE_FAV_THING":
    //             return { ...state,favoriteThing: state.favoriteThing.filter(fav=>fav!==action.payload) }
    //         case "ADD_TITLE":
    //             return { ...state,youtubeVideo: {...state.youtubeVideo,title: action.payload} }
    //         case "UPVOTE":
    //             return { ...state,youtubeVideo: {...state.youtubeVideo,votes:{ ...state.youtubeVideo.votes,up: action.payload }} }
    //         default:
    //             return state
    //     }
    // };

    console.log("Store@index: ", store );

    console.log('increment: ',increment);

    store.dispatch(increment())
    store.dispatch(setUserDetails({    
        firstName:'Daniel',
        lastName:'Saw',
        id: 123,
        email:'daniel@gmail.com'
    }))    

    return ( 
        <>
            <h1>Hello World</h1>
        </>
     );
}
 
export default Redux01;