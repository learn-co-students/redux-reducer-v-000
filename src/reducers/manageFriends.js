export function manageFriends(state, action){
  let newState = Object.assign({}, state, {})
  switch (action.type) {
    case 'ADD_FRIEND':
      newState.friends.push(action.friend)
      return newState
    case 'REMOVE_FRIEND':
      const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
      return Object.assign({}, state, {
        friends: [
          ...state.friends.slice(0, removalIndex),
          ...state.friends.slice(removalIndex + 1)
        ]
      });
    default:
      return state;
  }
}
