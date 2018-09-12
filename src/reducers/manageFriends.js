export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return (
                {
                friends: [
                    ...state.friends,
                    action.friend
                ]
                }
            );
        case 'REMOVE_FRIEND': 
            let copy = state.friends.slice()
            let removeId = state.friends.findIndex(friend => action.id === friend.id)
            copy.splice(removeId, 1)
            return (
                {friends: [...copy]}
            )
            
    
        default:
            return state;
    }
}
