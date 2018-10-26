export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      if (action.friend && state.friends) {
        const newFriends = state.friends
        newFriends.push(action.friend)
        return {...state, friends: newFriends}
      }
      case 'REMOVE_FRIEND':
      if (action.id && state.friends) {
        const unfriend = state.friends
        const unfriended = unfriend.filter(friend => friend.id !== action.id)
        return {...state, friends: unfriended}
      }
    default: return state
  }

}
