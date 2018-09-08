export function manageFriends(state, action){

  switch (action.type) {
    case 'ADD_FRIEND':
    return {...state, friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
    const friendToRemove = state.friends.findIndex(friend => friend.id === action.id) 
    const newFriends = [...state.friends]
    newFriends.splice(friendToRemove, 1)
    return {...state, friends: newFriends}
    default: 
    return state
  }

}
