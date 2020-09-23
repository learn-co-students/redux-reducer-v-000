export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND' :
            return { ...state, 
                friends: [...state.friends, action.friend] 
            }
        case 'REMOVE_FRIEND' :
            return { ...state, 
                friends: state.friends.filter(friend => friend.id != state[action.id])}
        default: 
            return state;
    }
}


