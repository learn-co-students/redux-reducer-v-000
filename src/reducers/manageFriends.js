export function manageFriends(state, action) {
    switch (action.type) {
        case "ADD_FRIEND":
            return {
                friends: [...state.friends, action.friend]
            }
        case "REMOVE_FRIEND":
            const removed = state.friends.find(friend => friend.id === action.id)
            const indexOfRemoved = state.friends.indexOf(removed);
            const friendsCopy = [...state.friends]
            friendsCopy.splice(indexOfRemoved, 1)
            return {
                    friends: friendsCopy
                }
        default:
            return state;
    }
}