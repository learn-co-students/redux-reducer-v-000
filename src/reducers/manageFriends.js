export function manageFriends(state = { friends: [] }, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return Object.assign({}, state, { 
                friends: [ 
                    ...state.friends, 
                    action.friend
                ]
            });
        case 'REMOVE_FRIEND':
            
            const friendRemover = state.friends.findIndex(friend => friend.id === action.id);
            return Object.assign({}, state, {
                friends: [
                    ...state.friends.slice(0, friendRemover),
                    ...state.friends.slice(friendRemover + 1)
                ]
            })
        default:
            return state 
    }
}
