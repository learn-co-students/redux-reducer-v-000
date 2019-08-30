export function manageFriends(state, action){
  action = {
    type: "ADD_FRIEND",
    friend: "Chrome Boi"
  }
}

// function reducer(state, action){      
//   switch (action.type) {
//     case 'INCREASE_COUNT':
//       return {count: state.count + 1}
//     case 'DECREASE_COUNT':
//       return {count: state.count - 1}
//     default:
//       return state;
//   }
// }