export function manageFriends(state, action, friend){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {...state, friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      return {friends: state.friends.filter(friend => friend.id !== action.id)}
    default:
      return state;
  }
}
