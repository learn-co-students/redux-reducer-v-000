export function manageFriends(state, action){
  switch(action.type){
    case "ADD_FRIEND":
      return {friends: state.friends.concat(action.friend)}
    case "REMOVE_FRIEND":
      const newFriends = state.friends.filter(friend => friend.id !== action.id)
      return {friends: newFriends}
    default:
      return state
}
}
