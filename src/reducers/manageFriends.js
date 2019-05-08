export function manageFriends(state, action){

  switch(action.type) {
    case "ADD_FRIEND":
      return {friends: [...state.friends, action.friend]}
    case"REMOVE_FRIEND":
      let newArray = state.friends.filter(el => el.id !== action.id )
      return {friends: newArray}
    default:
      return state;
  }
}
