export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      let friend = action.friend
      return {...state.friends, friends: [...friends, friend]}

    case "REMOVE_FRIEND":
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
