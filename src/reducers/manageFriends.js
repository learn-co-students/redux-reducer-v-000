export function manageFriends(state, action){

  if (action.type === 'ADD_FRIEND' && Object.keys(action.friend).includes('name' && 'hometown' && 'id')) {
    return { friends: [...state.friends, action.friend] }
  } else if (action.type === 'REMOVE_FRIEND' && Object.keys(action).includes('id')) {
    const indexRemove = state.friends.findIndex(element => element.id === action.id)
    return { friends: state.friends.filter((el, index) => index !== indexRemove)}
  }
    else {
    return state
  }
}


// let state = {
//   friends: [
//     {
//       name: 'Avi',
//       hometown: 'NYC',
//       id: 100
//     }
//   ],
// };
//
// {
//   type: "ADD_FRIEND",
//   friend: {
//     name: 'Joe',
//     hometown: 'Boston',
//     id: 101
//   }

// {
//   friends: [
//     {
//       name: 'Avi',
//       hometown: 'NYC',
//       id: 100
//     },
//     {
//       name: 'Joe',
//       hometown: 'Boston',
//       id: 101
//     }
//   ]
// }
