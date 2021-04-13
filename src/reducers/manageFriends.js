export function manageFriends(state={friends:[]}, action){
  
  switch(action.type) {
    case "ADD_FRIEND":
      const currentFriends = state.friends
      currentFriends.push(action.friend)
      return {friends: currentFriends}
      break
    case "REMOVE_FRIEND":
      const newFriends = state.friends.filter(friend => friend.id != action.id)
      return {friends: newFriends}
      break
    default:
      return state
      break
  }
  
}
