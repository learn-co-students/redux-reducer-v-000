export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND": 
      if (action.friend) {
        return {friends: state.friends.concat(action.friend)} 
      } 
    case "REMOVE_FRIEND": 
      if (action.id) {
        var newFriends = state.friends.filter(function(friend) {
          return friend.id !== action.id; 
        }); 
        return {friends: newFriends}; 
      }
    default: return state;  
  }
}
