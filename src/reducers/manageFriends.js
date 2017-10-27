export function manageFriends(state, action){
  console.log(state.friends);
  switch (action.type) {
    case 'ADD_FRIEND':
      return Object.assign({}, state, {
        friends: [...state.friends, action.friend]
      })
    case 'REMOVE_FRIEND':
        return {friends: state.friends.filter(item => item.id !== action.id)}
    default:
      return state;

  }
}

/////////

// Object.assign({}, state, {
//   friends: [...state.friends, action.friend]
//
// });
