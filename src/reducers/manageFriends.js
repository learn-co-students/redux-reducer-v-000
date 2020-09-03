export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return { ...state, friends: [...state.friends, action.friend] };
    case "REMOVE_FRIEND":
      var i = state.friends.findIndex(friend => action.id === friend.id);
      return ( { ...state, friends: [...state.friends.slice(0, i), ...state.friends.slice(++i)] } )
    default: return state;
  }
}
