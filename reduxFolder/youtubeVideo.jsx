export function addTitle(title){
    return{
        type: "ADD_TITLE",
        payload: title
    }
}

export function upvoteVideo(vote=5){
    return{
        type: "UPVOTE",
        payload: vote
    }
}

export function downVoteVideo(vote=1){
    return{
        type: "DOWNVOTE",
        payload: vote
    }
}

const initialState = {
    title:"",
    viewCount:0,
    votes:{
        up:0,
        down:0
    }
}

export default function youtubeReducer(state=initialState,action){
    switch (action.type) {
        case "ADD_TITLE":
            return {...state,title: action.payload}
        case "UPVOTE":
            return {...state,votes:{...state.votes,up:action.payload}}  
        case "DOWNVOTE":
            return {...state,votes:{...state.votes,down:action.payload}}   
        default:
            return state
    }
}