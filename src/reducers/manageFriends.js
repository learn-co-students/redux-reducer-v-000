export function manageFriends(state = {friends: []}, action){

  if(action.type == "ADD_FRIEND") {
    return Object.assign({}, state, {
      friends: [...state.friends, action.friend]
    });
  } else if(action.type == "REMOVE_FRIEND") {
    const removeIndex = state.friends.findIndex(friend => friend.id == action.id);
    return Object.assign({}, state, {
      friends: [...state.friends.slice(0, removeIndex),
      ...state.friends.slice(removeIndex + 1)]
    });
  } else {
    return state;
  }
}
