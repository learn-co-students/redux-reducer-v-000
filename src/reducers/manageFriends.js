export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return Object.assign({}, state, {
        friends: [
          ...state.friends,
          action.friend
        ]
      });
    case 'REMOVE_FRIEND':
      const leftoverFriends = state.friends.filter((el, index) => el.id !== action.id);
      return Object.assign({}, state, {
        friends: leftoverFriends
      });
    default:
      return state;
  }
}
