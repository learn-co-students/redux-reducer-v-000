export function manageFriends(state, action){
  switch(action.type) {
    case 'ADD_FRIEND':
    return {...state, friends: [...state.friends, action.friend] }
    case 'REMOVE_FRIEND':
      let friends = state.friends.filter(friend => friend.id !== action.id ) 
      return { friends }
    default:
    return {...state};
  }
}


// manageFriends
// removes the friend when action type is 'REMOVE_FRIEND' 
// and the action has a property of the friends id to be removed: