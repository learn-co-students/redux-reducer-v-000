let state = {
  friends: []
}
export function manageFriends(state, action){
  switch(action.type){
    case 'ADD_FRIEND':
    console.log(...state)
    
    case 'REMOVE_FRIEND':
    console.log(...state)
    default:
      return state;
  }
}
