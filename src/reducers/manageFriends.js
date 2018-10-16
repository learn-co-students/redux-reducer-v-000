export function manageFriends(state, action){
  if (action.type === "ADD_FRIEND") {
    return {friends: [...state.friends, action.friend]}
  } else if (action.type === "REMOVE_FRIEND") {
    let newFriends = []
    state.friends.forEach(function (friend) {
      if (friend.id !== action.id) {
        newFriends.push(friend)
      }
    })
    return {friends: newFriends}
  } else {
    return state
  }
}
