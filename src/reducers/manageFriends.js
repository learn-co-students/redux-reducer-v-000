export function manageFriends(state, action){  
    switch (action.type) { 
        case 'ADD_FRIEND': 
            return Object.assign({}, state, { friends: [...state.friends, action.friend] })
        case 'REMOVE_FRIEND': 
            let filteredFriends = state.friends.filter( friend => friend.id !== action.id )
            return Object.assign({}, state, {friends: [...filteredFriends]})
        default:
            return state;
    }
}

