export function manageFriends(state, action, friends){

console.log(action.friend)
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]}

    case 'REMOVE_FRIEND':
      let removeFriendId = action.id
      let removeFriends = state.friends.filter(function(f){return f.id !== removeFriendId})
      return {friends: removeFriends}
    default:
      return state;
  }

}
