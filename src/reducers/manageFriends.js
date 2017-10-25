export function manageFriends(state, action){
  switch(action.type) {
    case 'ADD_FRIEND':
      return Object.assign({}, state, {friends: state.friends.concat(action.friend)})
    case 'REMOVE_FRIEND':
      return Object.assign({}, state, {friends: state.friends.filter(function(f) {return f.id !== action.id})})
    default:
      return state;
  }
}
