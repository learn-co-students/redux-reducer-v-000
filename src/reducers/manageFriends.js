export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      let addFriendArr = state.friends;
      addFriendArr.push(action.friend);
      return {friends: addFriendArr};
    case 'REMOVE_FRIEND':
      let delFriendArr = state.friends;
      let returnArr = delFriendArr.filter(friend => friend.id !== action.id);
      return {friends: returnArr};
    default: return state;
  }
}
