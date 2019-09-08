export function manageFriends(state, action){
}
function manageFriends(state, action){
debugger
  switch (action.type){
    case 'ADD_FRIEND':
      return Object.assign({}, state, {friends: [ ...state.friends, action.friend]
      })
    case 'REMOVE_FRIEND':
    const filteredFriends = state.friends.filter(friend => friend.id !== action.id)
    return Object.assign({}, state, {friends: [...filteredFriends]
    })
      default:
        return state
  
  }
}