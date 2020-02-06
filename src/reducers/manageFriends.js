export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {...state, friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      let target = state.friends.findIndex(friend => friend.id === action.id)
      return {...state, friends: [...state.friends.slice(0, target), ...state.friends.slice(target + 1)]}
    default:
      return state
  }
}
