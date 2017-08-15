export function manageFriends(state, action){
  //let friend = action.friend
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: Object.assign([], [...state.friends, action.friend])}
    case 'REMOVE_FRIEND':
      var index = state.friends.findIndex(friend => friend.id === action.id)
      return {friends: Object.assign([], [...state.friends.slice(0, index), ...state.friends.slice(index + 1, state.friends.length + 1)])}
    default:
      return state;
  }
}
