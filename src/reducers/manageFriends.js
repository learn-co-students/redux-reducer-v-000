export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return {friends: [...state.friends, action.friend]}
    case "REMOVE_FRIEND":
      let new_friends = state.friends.filter( el => el.id !== action.id );
      return {friends: new_friends};

      break;
    default:
      return state;

  }
}
