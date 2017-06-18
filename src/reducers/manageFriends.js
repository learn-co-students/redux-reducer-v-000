export function manageFriends(state, action){

  let friendManager;

  switch (action.type) {

    case 'ADD_FRIEND':

      friendManager = Object.assign(
        ...state,
        {friends: [...state.friends, action.friend]}
      )

      break;

    case 'REMOVE_FRIEND':

      let r = state.friends.findIndex(f => f.id === action.id)

      friendManager = Object.assign(
        ...state, {friends: [...state.friends.slice(0, r),
        ...state.friends.slice(r + 1)]}
      )

      break;

    default:friendManager = state

  }
  return friendManager
}
