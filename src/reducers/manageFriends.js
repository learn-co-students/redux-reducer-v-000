export function manageFriends(state, action){
  switch (action.type){
    case 'ADD_FRIEND':
      let newFriend = action.friend
      let newFriends = [...state.friends, newFriend]
      return {friends: newFriends}
    case 'REMOVE_FRIEND':
      let oldFriendId = action.id
      let oldFriends = state.friends.filter(function(f){return f.id !== oldFriendId})
      return {friends: oldFriends}
    default:
      return state
  }
}
