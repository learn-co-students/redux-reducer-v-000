export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      var newState = Object.assign({}, state);
      newState.friends.push(action.friend);
      return newState;
    case 'REMOVE_FRIEND':
      var removedState = Object.assign({}, state);
      return {friends: removedState.friends.filter( (item) => item.id !== action.id)}
    default:
      return state;
  }
}
