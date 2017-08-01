export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {...state, friends: [...state.friends, action.friend]};
    case 'REMOVE_FRIEND':
      let newFriends = [...state.friends];

      for (var i=0; i<newFriends.length; i++) {
        if (newFriends[i].id === action.id) {
          newFriends.splice(i, 1);
        }
      }

      return {...state, friends: [...newFriends]};
    default:
      return state;
  }
}
