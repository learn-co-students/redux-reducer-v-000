export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      let list = [...state.friends, action.friend]
      return { ...state, friends: list }
      return "hi"
    case "REMOVE_FRIEND":
      //remove the object where object.id === action.id
      let matchingFriends = state.friends.filter(
        friend => friend.id !== action.id
      )
      return { ...state, friends: matchingFriends }
    default:
      return state
  }
}
