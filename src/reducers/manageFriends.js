export function manageFriends(state, action){
  console.log(action)
  switch(action.type){
    case 'ADD_FRIEND':
      const friend = action.friend
      return {...state, friend}
    case 'REMOVE_FRIEND':
      return {}
    default:
    return state;
  }
}
// friends: [ { name: 'Avi', hometown: 'NYC', id: 100 } ] }
