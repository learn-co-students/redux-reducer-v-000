export function manageFriends(state, action){
    let new_friends = state.friends.slice(0);   
    switch (action.type) {
        case 'ADD_FRIEND':
          new_friends.push(action.friend); 
          return {friends: new_friends}; 
        case 'REMOVE_FRIEND':
            const friendIndex = new_friends.findIndex(friend => friend.id === action.id); 
            new_friends.splice(friendIndex, 1);
           return {friends: new_friends}; 
        default:
          return state;
      }
}
