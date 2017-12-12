export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: [ ...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      const deleteIndex = state.friends.findIndex(friend => friend.id === action.id)
      return {friends: [
        ...state.friends.slice(0, deleteIndex),
        ...state.friends.slice(deleteIndex +1)
      ]}
    default:
      return state
  }
}
