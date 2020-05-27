export function manageFriends(state, action){
    switch (action.type) {
        case "ADD_FRIEND":
            let newFriendsArr = []
            newFriendsArr = state.friends
            newFriendsArr.push(action.friend)
            return { ...state, friends: newFriendsArr }
        case "REMOVE_FRIEND":
            let currentFriends = state.friends
            let filteredFriendsArr = currentFriends.filter(friend => friend.id !== action.id)
            return { ...state, friends: filteredFriendsArr }
        default:
            return state
    }
}
