export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {...state, friends: [
        ...state.friends, action.friend
      ]}
      case 'REMOVE_FRIEND':
      const removeId = state.friends.findIndex(friend => friend.id === action.friend.id)
      return {...state, friends: [
        ...state.friends, state.friends.slice(removeId)
      ]}
      default:
      return state

  }
}

let state = {friends: []}
let action = {
  type: 'ADD_FRIEND',
  friend: {
    name: "",
    hometown: "",
    id: 0
  }
  type: 'REMOVE_FRIEND'
  friend: {
    id: 0
  }
}
