export function manageFriends(state, action){
  if (action.type === "ADD_FRIEND") {
    const addFriend = action.friend
    const newFriends = [...state.friends, addFriend];
    return {friends: newFriends};
  } else {
    if (action.type === "REMOVE_FRIEND") {
      const removeIndex = state.friends.findIndex(friend => friend.id === action.id)
      const newFriends = [
        ...state.friends.slice(0, removeIndex),
        ...state.friends.slice(removeIndex + 1)

      ]
      return {friends: newFriends};
    } else {
      return state;
    }
  }
}
