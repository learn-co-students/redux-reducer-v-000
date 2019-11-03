export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return {friends: state.friends.concat(action.friend)}
    case "REMOVE_FRIEND":
    debugger
      const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
      return {friends: [state.friends.slice(0, removalIndex)[0], state.friends.slice(removalIndex+1)[0]]}
    default:
      return state
  }
}
