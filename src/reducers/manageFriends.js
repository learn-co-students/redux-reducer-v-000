export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return Object.assign({}, state, {friends: [...state.friends, action.friend]});
    case "REMOVE_FRIEND":
      // deeply clone object
      let newState = JSON.parse(JSON.stringify(state));
      // find index to remove
      let idx = newState.friends.findIndex(friend => friend.id === action.id);
      // remove entry at idx and return the obj
      newState.friends.splice(idx, 1);
      return newState;
    default:
      return state;
  }

}
