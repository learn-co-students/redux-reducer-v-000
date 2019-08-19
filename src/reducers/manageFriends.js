export function manageFriends(state, action){
  if(action.type === 'ADD_FRIEND'){
    return {friends: state.friends << action.friend }
  }
}
