export function manageFriends(state={friends: []}, action){
    const newState = {...state}
    switch (action.type) {
        case "ADD_FRIEND":
            newState.friends.push(action.friend)
            return newState
        case "REMOVE_FRIEND":
            newState.friends = newState.friends.filter(x => x.id !== action.id)
            return newState
        default:
            return state;
    }
}
