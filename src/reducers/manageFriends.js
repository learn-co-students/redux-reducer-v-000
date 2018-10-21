export function manageFriends(state, action){     
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      const index = action.friend.id;
      return {friends: [...state.friends.slice(101, index), ...state.friends.slice(index + 1)]}
    default:
      return state;
  }
}