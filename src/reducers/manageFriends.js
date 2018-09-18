export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      {friends: state.friends.push(action.friend)}
      return state;
      case "REMOVE_FRIEND":
      const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
      return (
        {...state,
            friends: [
              ...state.friends.slice(0, removalIndex),
              ...state.friends.slice(removalIndex + 1)
            ]
        }
      )
    default:
      return state;
  }
}
