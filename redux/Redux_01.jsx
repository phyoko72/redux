import { createStore } from "redux";


const Redux01 = () => {
    
    function increment(number){
        return {
            type:"INCREMENT",
            payload: number
        }
    }

    function addFavThing(thing){
        return{
            type: "ADD_FAV_THING",
            payload: thing
        }
    }

    function removeFavThing(thing){
        return{
            type: "REMOVE_FAV_THING",
            payload: thing
        }
    }

    function addTitle(title){
        return{
            type: "ADD_TITLE",
            payload: title
        }
    }

    function upvoteVideo(vote){
        return{
            type: "UPVOTE",
            payload: vote
        }
    }

    const initialState = {
        count: 0,
        favoriteThing:[],
        youtubeVideo:{
            title:"",
            viewCount:0,
            votes:{
                up:0,
                down:0
            }
        }
    }

    const reducer = function(state=initialState,action){
        switch(action.type){
            case "INCREMENT":
                return { ...state,count: state.count + action.payload }
            case "ADD_FAV_THING":
                return { ...state, favoriteThing: [...state.favoriteThing,action.payload] }
            case "REMOVE_FAV_THING":
                return { ...state,favoriteThing: state.favoriteThing.filter(fav=>fav!==action.payload) }
            case "ADD_TITLE":
                return { ...state,youtubeVideo: {...state.youtubeVideo,title: action.payload} }
            case "UPVOTE":
                return { ...state,youtubeVideo: {...state.youtubeVideo,votes:{ ...state.youtubeVideo.votes,up: action.payload }} }
            default:
                return state
        }
    };

    const store = createStore(reducer)

    console.log("Store: ",store);

    store.subscribe(()=>{
        console.log('GetState: ', store.getState() );
    })

    store.dispatch(increment(5))
    store.dispatch(addFavThing('hi'))
    store.dispatch(increment(9))
    store.dispatch(addFavThing('world'))
    store.dispatch(removeFavThing('hello'))
    store.dispatch(addTitle("Learn Redux"))
    store.dispatch(addFavThing('JavaScript'))
    store.dispatch( upvoteVideo(5) )


    return ( 
        <>
            <h1>Hello World</h1>
        </>
     );
}
 
export default Redux01;