export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      let newState = {...state}
      newState.friends.push(action.friend)
      return { friends: newState.friends }
    case 'REMOVE_FRIEND':
      let copy = {...state}
      let target = copy.friends.find(friend => friend.id === action.id)
      let targetIndex = copy.friends.indexOf(target)
      copy.friends.splice(targetIndex, 1)
      return {friends: copy.friends}
    default:
      return state
  }
}
