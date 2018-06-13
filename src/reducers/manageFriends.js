export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return Object.assign({}, state, {friends:[...state.friends, action.friend]})
    case 'REMOVE_FRIEND':
      const getIndex = state.friends.findIndex(f => f.id === action.id)
      return Object.assign({}, state, {friends:
        [...state.friends.slice(0, getIndex),
         ...state.friends.slice(getIndex + 1 )]
        })
    default:
      return state;
  }
}
