export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      let oldFriend = state.friends.findIndex(friend => friend.id === action.id)
      return {friends: [...state.friends.slice(0, oldFriend), ...state.friends.slice(oldFriend+1)]}
    default:
      return state;
  }
}
