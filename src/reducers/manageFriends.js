export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      if (action.friend.name && action.friend.hometown && action.friend.id) {
        let newFriends = [...state.friends, action.friend]
        return {friends: newFriends}
      } else {
        return state;
      }
    case 'REMOVE_FRIEND':
      if (action.id) {
        let removedFriend = state.friends.findIndex((friend) => friend.id === action.id)
        let updatedFriends = [...state.friends.slice(0, removedFriend), ...state.friends.slice(removedFriend + 1)]
        return {friends: updatedFriends}
      } else {
        return state
      }
    default:
      return state;
   }
}
