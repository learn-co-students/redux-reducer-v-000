export function manageFriends(state, action){
  switch (action.type) {
    case 'REMOVE_FRIEND':
      const sanitizedFriends = state.friends.filter(function(friend) {
        if (friend.id !== action.id) {
          return friend;
        }
      });
      return Object.assign({}, state, {
        friends: [
          ...sanitizedFriends
        ]
      });
    case 'ADD_FRIEND':
      return Object.assign({}, state, {
        friends: [
          ...state.friends,
          action.friend
        ]
      });
    default:
      return state;
  }
}
