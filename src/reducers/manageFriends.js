export function manageFriends(state, action){
    switch (action.type) {
        case "ADD_FRIEND":
            return {
                friends: [...state.friends, action.friend]
              };
        case "REMOVE_FRIEND":
            const friendToBeRemoved = state.friends.findIndex(friend => friend.id === action.id);
            return {
                friends: [...state.friends.slice(0, friendToBeRemoved), ...state.friends.slice(friendToBeRemoved + 1)]
              };
        default: 
        return state
    } 
}
