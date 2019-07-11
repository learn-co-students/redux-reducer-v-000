
export function manageFriends(state, action){
    switch(action.type){
        case "ADD_FRIEND":
            return { ...state, friends: [...state.friends, action.friend]}
        case "REMOVE_FRIEND":
            const newState = {...state }
            newState.friends = newState.friends.filter(f => f.id !== action.id )
            return newState
        default:
            return state
    }
}