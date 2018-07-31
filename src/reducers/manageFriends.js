export function manageFriends(state, action){

  switch(action.type){
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
    let filteredArray = state.friends.filter(friend => action.id !== friend.id)
      return{friends: filteredArray}
    default:
      return state
  }
}
