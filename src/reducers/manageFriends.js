export function manageFriends(state, action){
  switch( action.type ) {
    case 'ADD_FRIEND':
      var newState = Object.assign({}, state);
      newState.friends.push(action.friend);
      return newState;
    case 'REMOVE_FRIEND':
      var filtered = Object.assign({}, state).friends.filter( f => f.id !== action.id);
      return {friends: filtered};
    default:
      return state;
  }
}
