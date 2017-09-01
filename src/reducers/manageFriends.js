export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      return {friends: state.friends.filter(function(f){
        return f.id !== action.id ? f : null
      })}
    default:
      return state;
  }
}
