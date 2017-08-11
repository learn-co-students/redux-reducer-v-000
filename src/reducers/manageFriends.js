export function manageFriends(state, action, friends){
  switch (action.type) {
    case "ADD_FRIEND":
      return {friends: [...state.friends, action.friend]}
    case "REMOVE_FRIEND":
      let friendId = action.id
      let removeFriends = state.friends.filter(function(f){
        return f.id !== friendId
      })
      return {friends: removeFriends}
    default:
      return state
  }
}
