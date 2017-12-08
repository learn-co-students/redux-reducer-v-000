export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      const exIndex = state.friends.findIndex(friend => friend.id === action.id);
      return Object.assign({}, state, {
        friends: [
          ...state.friends.slice(0, exIndex),
          ...state.friends.slice(exIndex + 1)
        ]
      });
    default:
      return state;
  }
}
