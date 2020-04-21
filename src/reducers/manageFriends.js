export function manageFriends(state = {friends: []}, action){
    switch(action.type){
        case "ADD_FRIEND":
            return({friends: [...state.friends, action.friend]}
            )

        case "REMOVE_FRIEND":
            
            let remove_this_id = state.friends.findIndex(friend => friend.id === action.id)
                
            return (
                {...state, friends: [
                    ...state.friends.slice(0, remove_this_id),
                    ...state.friends.slice(remove_this_id + 1)
                ]}
            )    
            default: return state
    }
}
