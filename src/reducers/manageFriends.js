'use strict'
export function manageFriends (state, action) {
  switch (action.type) {
    case 'ADD_FRIEND':
      return { friends: [...state.friends, action.friend] }
    case 'REMOVE_FRIEND':
      let removalIndex = state.friends.findIndex(x => x.id === action.id)
      return { friends: [...state.friends.slice(0, removalIndex), ...state.friends.slice(removalIndex + 1)] }
    default:
      return state
  }
}
