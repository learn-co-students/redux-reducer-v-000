export function manageFriends(state, action){
    switch(action.type) {
        case 'ADD_FRIEND': 
            return {friends: [...state.friends, action.friend]};
            break
        case 'REMOVE_FRIEND': 
            return {friends: state.friends.filter(friend => action.id !== friend.id)}
            break
        default: 
            return state
    }
}
