export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            let friends = state.friends.map(friend => friend)
            friends.push(action.friend);
            return {friends: friends }
        case 'REMOVE_FRIEND':
            let friendsUpdated = state.friends.filter(friend => friend.id != action.id)
            return {friends: friendsUpdated}
        default:
            return state;
    }
}
