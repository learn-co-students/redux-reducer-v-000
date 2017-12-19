export function manageFriends(state, action){
  switch(action.type){
    case 'ADD_FRIEND':
      return Object.assign({}, state, {
        friends: [
        ...state.friends,
        action.friend
      ]})
    case 'REMOVE_FRIEND':
      let removalIndex = state.friends.findIndex(friend => friend.id === action.id) //take the action.id that was passed into the function and look in the array of state.friends for a match
      return Object.assign({}, state, {
        friends: [ //since slice is not destructive, hash spread in the array
          ...state.friends.slice(0,removalIndex), //gets all friends to the left of removalIndex
          ...state.friends.slice(removalIndex+1) //gets all friends to right of removalIndex
        ]})
    default:
      return state
  }
}
