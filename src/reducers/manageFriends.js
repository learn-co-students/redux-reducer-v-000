function removeFriend (array, id) {
  return array.filter(function(value, index, arr){
    return value.id != id
  })
}

export function manageFriends(state, action){
  switch(action.type) {
    case "ADD_FRIEND" :
      return {friends: [...state.friends, action.friend]}
    case "REMOVE_FRIEND" :
      return {friends: removeFriend(state.friends, action.id)}
    default:
      return state
  }
}
