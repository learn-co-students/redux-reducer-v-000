export function manageFriends(state, action){
  switch(action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      const removalIndex = state.friends.findIndex(friend => friend.id === action.id);

      return (
        {...state,
            friends: [
              ...state.friends.slice(0, removalIndex),//everything up to friend
              ...state.friends.slice(removalIndex + 1)//everything after friend
            ]
        }
      )

    default:
      return state
  }
}
