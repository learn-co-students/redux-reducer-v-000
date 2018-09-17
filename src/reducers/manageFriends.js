export function manageFriends(state, action){
  switch(action.type) {
    case 'ADD_FRIEND':
      return {friends: state.friends.push(action.friend)}
    case 'REMOVE_FRIEND':
      return {friends: state.friends.filter(e => e.id !== action.id)}
    default:
      return state
  }
}
