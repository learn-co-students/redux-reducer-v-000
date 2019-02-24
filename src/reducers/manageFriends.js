export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      var newState = state.friends.concat(action.friend);
      return { friends: newState }
    case 'REMOVE_FRIEND':
      var newState = state.friends.filter(friend => friend.id != action.id);
      return { friends: newState }
    default:
      return state
  }
}
