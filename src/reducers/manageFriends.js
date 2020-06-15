export function manageFriends(state, action){
    switch(action.type) {
        case "ADD_FRIEND":
            let allFriends = Object.assign(...state, {friends: state.friends.concat(action.friend)})
            return allFriends
        case "REMOVE_FRIEND":
            let remainingFriends = Object.assign(...state, {friends: state.friends.filter(friend => friend.id !== action.id)})
            return remainingFriends
        default:
            return state;
    }
}
