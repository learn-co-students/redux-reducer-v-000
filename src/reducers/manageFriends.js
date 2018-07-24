export function manageFriends(state, action){
  switch(action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]};
    case 'REMOVE_FRIEND':
      const index = state.friends.findIndex(friend => friend.id === action.id)
      const newFriendList = [...state.friends]
      newFriendList.splice(index, 1)
      return {friends: newFriendList}
    default:
      return state;
  }
}
