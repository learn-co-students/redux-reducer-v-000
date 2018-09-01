export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return {...state, friends: [...state.friends, action.friend]};
    case "REMOVE_FRIEND":
      {
        const index = state.friends.findIndex(friend => friend.id === action.id);
        if (index === 0) {
          return {...state, friends: [...state.friends.slice(1,state.friends.length)]}
        } else if(index === state.friends.length - 1) {
          return {...state, friends: [...state.friends.slice(0,state.friends.length - 1)]}
        } else {
          return {...state, friends: [...state.friends.slice(0,index), ...state.friends.slice(index + 1, state.friends.length)]}
        }
      }
    default:
      return state;
  }
}
