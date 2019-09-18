export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND':
          let new_friends = state.friends; 
          new_friends.push(action.friend); 
          return {friends: new_friends}; 
        case 'REMOVE_FRIEND':
            let new_friends = state.friends; 
          //  const index = new_friends.findIndex(friend => element.index === action.index); 
          return new_friends; 
        default:
          return state;
      }
}
