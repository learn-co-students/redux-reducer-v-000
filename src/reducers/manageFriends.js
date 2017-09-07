export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":
      var friends = [...state.friends, action.friend];
      return Object.assign({}, state, {friends});
    case "REMOVE_FRIEND":
      var friends = state.friends.filter(friend => friend.id != action.id);
      return Object.assign({}, state, {friends});
    default:
      return state;
  }
}
