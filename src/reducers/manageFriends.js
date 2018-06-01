export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      if (action.friend.name && action.friend.hometown && action.friend.id) {
        return {friends: [...state.friends, action.friend]}
      } else {
        return state
      }
    case 'REMOVE_FRIEND':
      if (action.id) {
        const oldFriendIndex = state.friends.findIndex(f => f.id === action.id)
        const newFriends = {friends: [...state.friends]}
        
        newFriends.friends.splice(oldFriendIndex, 1)

        return newFriends
      }
    default:
      return state
  }
}
