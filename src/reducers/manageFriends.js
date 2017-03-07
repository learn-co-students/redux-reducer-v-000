export function manageFriends(state, action){
  // console.log(action)
  switch(action.type) {
    case 'ADD_FRIEND':
      const newState = Object.assign({}, state, {friends: [...state.friends, action.friend]})
      return newState
    case 'REMOVE_FRIEND':
      return Object.assign({}, state, {friends: state.friends.filter(friend => friend.id !== action.id)})
    default:
      return state
  }
}
