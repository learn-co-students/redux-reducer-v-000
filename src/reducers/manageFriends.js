export function manageFriends(state, action){
  if (action.type === 'ADD_FRIEND' && 'name' in action.friend && 'hometown' in action.friend && 'id' in action.friend) {
    return Object.assign({}, state, {friends: [...state.friends, action.friend] })
  } else if (action.type === 'REMOVE_FRIEND' && action.id){
    const formerFriend = state.friends.find(f => f.id === action.id)
    const formerFriendIndex = state.friends.indexOf(formerFriend)
    return Object.assign({}, state, {friends: [...state.friends.slice(0,formerFriendIndex), ...state.friends.slice(formerFriendIndex + 1)]})
  } else {
    return state
  }
}
