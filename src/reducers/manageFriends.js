export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      let friendList = [...state.friends, action.friend]
      return { ...state, friends: friendList }
    case "REMOVE_FRIEND":
      let deletedFriend = state.friends.filter(
        friend => friend.id !== action.id
      )
      return { ...state, friends: deletedFriend }
    default:
      return state
  }
}
