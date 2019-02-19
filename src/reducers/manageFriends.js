export function manageFriends(state, action){
  switch (action.type){
    case 'ADD_FRIEND':
      let newfriend = {...state};
      newfriend.friends.push(action.friend);
      return newfriend;
    case 'REMOVE_FRIEND':
      let index = state.friends.findIndex(element => element.id === action.id);
      let newfriends = state.friends.slice(0, index).concat(state.friends.slice(index + 1))
      return {...state, friends: newfriends}
    default:
      return state;
  }
}