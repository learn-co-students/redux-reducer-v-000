//let state = {friends: 0}
//let action = {
//  type: 'ADD_FRIEND',
//  friend: {
//    name: 'Chrome Boi',
//    id: 1,
//    hometown: 'New York'
//  }
//}

export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      let friends = state.friends.filter(friend => friend.id !== action.id);
      return {friends}
    default:
      return state;
  }
}
