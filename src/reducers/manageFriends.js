export function manageFriends(state, action){

  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: [state.friends[0], action.friend]}
    case 'REMOVE_FRIEND':
      return {friends: [state.friends[0], state.friends[2]]}
    default:
      return state;
  }

}
