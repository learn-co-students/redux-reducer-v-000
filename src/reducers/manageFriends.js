export function manageFriends(state = {friends: []}, action){

    switch(action.type){
        case 'ADD_FRIEND':
            return {
                ...state,
                friends: [
                    ...state.friends,
                    action.friend
                 ]
            }
            // break;
        case 'REMOVE_FRIEND':
            const removed = state.friends.findIndex(friend => friend.id === action.id)
            return (
                {
                    ...state,
                    friends: [
                        ...state.friends.slice(0, removed),
                        ...state.friends.slice(removed + 1)
                    ]
                }
            )
            default: return state
            //what is the action.id?
            //do any of the friends have this id?



    }
}
