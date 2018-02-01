export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return Object.assign({}, state, {
        friends: [...state.friends, action.friend]
      })
    case 'REMOVE_FRIEND':
       return Object.assign({}, state, {
         friends: state.friends.filter(friend => friend.id !== action.id )
       })
    default:
    return state;
  }
}

//
// let dog = {id: 1, name: 'scooby', color: 'brown', age: 4};
// // if scooby had a birthday, we could write:
// let olderDog = Object.assign({}, dog, {age: dog.age + 1})
//
//
// let state = {
//   friends: [
//     {
//       name: 'Avi',
//       hometown: 'NYC',
//       id: 100
//     }
//   ],
// };
