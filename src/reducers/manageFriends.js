export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      if (action.friend) {
        state.friends.push(action.friend);
        return state
      } 
    case 'REMOVE_FRIEND':
      if (action.id) {
        const realFriends = state.friends.filter(f => f.id !== action.id)
        return {friends: realFriends} 
      }
    default: 
      return state
  }
}
