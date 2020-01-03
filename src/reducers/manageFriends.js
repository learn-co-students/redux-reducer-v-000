export function manageFriends(state, action) {
    let friends = state.friends
    switch (action.type) {
        case ("ADD_FRIEND"):
            let newFriends = { "friends": [...state.friends, action.friend] }
            return newFriends;
        case ("REMOVE_FRIEND"):
            let removedFriends = { "friends": state.friends.filter((friend) => friend.id !== action.id) }
            return removedFriends;
        default:
            return state;
    }
}
