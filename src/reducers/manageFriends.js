export function manageFriends(state = {
  friends: [],
}, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return Object.assign({}, state, {
        friends: [
          ...state.friends,
          action.friend
        ]
      })
      case "REMOVE_FRIEND":
        const removeFriendIndex = state.friends.findIndex(friend => friend.id === action.id);
          return Object.assign({}, state, {
            friends: [
              ...state.friends.slice(0, removeFriendIndex),
              ...state.friends.slice(removeFriendIndex + 1)
            ]
          })
    default:
      return state;
  }
}
