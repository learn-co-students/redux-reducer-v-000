export function manageFriends(state, action){

  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      return {friends: state.friends.filter(item => item.id !== action.id)}
    default:
      return state;
  }

}
