export function manageFriends(state, action){
  console.log(action);
  switch(action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]};
    case 'REMOVE_FRIEND':
      let removeIndex = state.friends.findIndex((friend) => {
        return friend.id === action.id;
      });
      
      return {friends: [
        ...state.friends.slice(0, removeIndex), 
        ...state.friends.slice(removeIndex+1, state.friends.length)
      ]};
    default: 
      return state;
  }
}
