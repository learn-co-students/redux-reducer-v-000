export function manageFriends(state, action){
  let newFriends = null

  switch (action.type) {
    case "ADD_FRIEND":
      newFriends = state.friends.slice(0)
      newFriends.push({
        name: action.friend.name, 
        hometown: action.friend.hometown, 
        id: action.friend.id
      })

      console.log(newFriends)
      
      return {friends: newFriends}  
    case "REMOVE_FRIEND":
      newFriends = state.friends.filter(friend => friend.id !== action.id)
      return {friends: newFriends}
    default:
      return state
  }
}
