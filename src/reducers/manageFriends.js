export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return Object.assign({}, state, {friends: [...state.friends, action.friend]});
    case "REMOVE_FRIEND":
      let newState = JSON.parse(JSON.stringify(state));
      let idx = newState.friends.findIndex(friend => friend.id === action.id);
      newState.friends.splice(idx, 1);
      return newState;
    default:
      return state;
  }

}
