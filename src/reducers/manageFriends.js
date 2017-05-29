export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return { friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      const friendArray = state.friends.slice()
      const indexOfFriendToBeRemoved = friendArray.findIndex(friend => friend.id === action.id)
      friendArray.splice(indexOfFriendToBeRemoved, 1)
      return { friends: friendArray }
    default:
      return state
  }
}
