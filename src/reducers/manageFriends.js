export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return {friends: [...state.friends, action.friend]}
    case "REMOVE_FRIEND":
      let newArr = state.friends.filter(el => el.id !== action.id)
      return {friends: newArr}
    default:
      return state;
  }
}
