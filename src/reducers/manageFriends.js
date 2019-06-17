export function manageFriends(state, action){

    const friendPosition = state.friends.findIndex(friend => friend.id === action.id)
  
    switch(action.type) {
      case 'ADD_FRIEND':
        return {...state, friends: [...state.friends, action.friend]}
      case 'REMOVE_FRIEND':
        return {...state, friends: [...state.friends.slice(0, friendPosition), ...state.friends.slice(friendPosition + 1)]}
      default:
        return state
    }
  }
