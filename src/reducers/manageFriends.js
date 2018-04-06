export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {...state, friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      const index = state.friends.findIndex(friend => friend.id === action.id)
      const updatedFriends = [...state.friends]
      updatedFriends.splice(index, 1)
      return {...state, friends: updatedFriends}
    default:
      return state;
  }
}
