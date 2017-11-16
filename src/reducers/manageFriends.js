export function manageFriends(state, action){
    switch(action.type){
        case "ADD_FRIEND":
            let newState = {...state, friends: [
                ...state.friends,
                action.friend
            ]}
            return newState
        case "REMOVE_FRIEND":
            let removeFriendState = {...state, friends: state.friends.filter(function(obj){
                    return obj.id !== action.id
                }) }
            
            return removeFriendState

        default:
            return state
    }
}
