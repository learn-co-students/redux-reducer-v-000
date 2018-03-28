export function manageFriends(state, action, newaction){
  switch (action.type) {
    case'ADD_FRIEND':
    return {friends: [...state.friends, action.friend]}
    case'REMOVE_FRIEND':
    const removeIndex = state.friends.findIndex(friend => friend.id === action.id)
    return {friends: [...state.friends.slice(0, removeIndex), ...state.friends.slice(removeIndex + 1)]}
    default:
    return state;
  }
}

let state = {friends: []}
let action = {type: 'ADD_FRIEND'}
let newaction = {type: 'REMOVE_FRIEND'}
manageFriends(state, action)



// switch (action.type) {
//   case 'INCREASE':
//   return {numberOfPresents: state.numberOfPresents + 1}
//   default:
//   return state;
// }
// }
//
// let state = {numberOfPresents: 0}
// let action = {type: 'INCREASE'}
//
// managePresents(state, action)
