export function addFavThing(thing){
    return{
        type: "ADD_FAV_THING",
        payload: thing
    }
}

export function removeFavThing(thing){
    return{
        type: "REMOVE_FAV_THING",
        payload: thing
    }
}

export default function favThingsReducer(favoriteThing=[],action){
    switch (action.type) {
        case "ADD_FAV_THING":
            return [...favoriteThing,action.payload]
        case "REMOVE_FAV_THING":
            return favoriteThing.filter(fav=>fav !== action.payload)   
        default:
            return favoriteThing
    }
}