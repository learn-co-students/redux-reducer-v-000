// let state = {
//   friends: [
//     {
//       name: 'Avi',
//       hometown: 'NYC',
//       id: 100
//     }
//   ],
// };

function deleteFriend(array, id) {
  return array.filter(friend => friend.id !== id)
}

export function manageFriends(state, action) {
  switch(action.type) {
    case 'ADD_FRIEND':
      return Object.assign({}, state, {friends: [...state.friends, action.friend]})
    case 'REMOVE_FRIEND':
      return Object.assign({}, state, {friends: deleteFriend(state.friends, action.id)})
    default:
      return state;
  }
}
