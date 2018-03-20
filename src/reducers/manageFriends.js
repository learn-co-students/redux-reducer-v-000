export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      let friendList = [...state.friends, action.friend]
      return { friends: friendList }
    case 'REMOVE_FRIEND':
      let matchingFriend = state.friends.filter(
        friend => friend.id !== action.id)
        
      return { friends: matchingFriend}
    default: 
      return state
  }
}
