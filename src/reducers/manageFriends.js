export function manageFriends(state, action){
  switch(action.type){
    case "ADD_FRIEND":
      return Object.assign({}, state, {friends: [...state.friends, action.friend]})
    case "REMOVE_FRIEND":
      for(var i = 0; i < state.friends.length; i++){
        if(state.friends[i].id === action.id){
          var newFriends = [...state.friends];
          newFriends.splice(i, 1);
          return Object.assign({}, state, {friends: newFriends});
        }
      }
    default:
      return state;
  }
}
