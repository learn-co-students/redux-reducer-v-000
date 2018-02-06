export function manageFriends(state, action){
  const stateClone = {...state};
  switch (action.type) {
    case 'ADD_FRIEND':
      stateClone.friends.push(action.friend);
      return stateClone;
    case 'REMOVE_FRIEND':
      const filteredFriends = stateClone.friends.filter(function(friend){
        return friend.id !== action.id;
      })
      return {friends: filteredFriends};
    default:
      return stateClone;
  }
}
