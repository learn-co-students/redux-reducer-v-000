export function manageFriends(state, action){
  switch(action.type) {
    case 'REMOVE_FRIEND':
      let removalIndex = state.friends.findIndex(friend => friend.id === action.id);
      return {...state, friends: [
        ...state.friends.slice(0, removalIndex),
        ...state.friends.slice(removalIndex + 1)
      ]};
      return {friendRemove, ...state};
    case 'ADD_FRIEND':
      return {...state, friends: [...state.friends, action.friend]}
    default: 
      return state
  }
}

