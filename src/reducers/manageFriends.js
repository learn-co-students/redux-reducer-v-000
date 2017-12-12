export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: [ ...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      const deleteFriend = state.friends.findIndex(friend => friend.id === action.id)
      return {friends: [
        ...state.friends.slice(0, deleteFriend),
        ...state.friends.slice(deleteFriend +1)
      ]}
    default:
      return state
  }
}
