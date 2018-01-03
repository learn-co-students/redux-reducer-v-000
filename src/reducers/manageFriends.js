export function manageFriends(state, action){
    let friendsArray = [];
    switch (action.type) {
        case "ADD_FRIEND":
            friendsArray = [...state.friends, action.friend];
            return {...state, friends: friendsArray};
        case "REMOVE_FRIEND":
            friendsArray = state.friends.filter(friend => friend.id !== action.id); 
            return {...state, friends: friendsArray};
        default:
            return state;
    }
}
