export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
    //console.log(state.friends)
    //console.log(action.friend)
      return {...state, friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      const removeIndex = state.friends.findIndex(friend => friend.id === action.id);
      return {...state, friends: [...state.friends.slice(0, removeIndex), ...state.friends.slice(removeIndex + 1)]}
    default:
    return state;
  }
}
