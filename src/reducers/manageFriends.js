export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return Object.assign({}, state, {friends: [...state.friends, action.friend]})
    case 'REMOVE_FRIEND':
      return { friends: state.friends.filter(item => item.id !== action.id) }
    default:
      return state;
  }

}
// In manageFriends.js write a function called manageFriends that takes in an action and the previous state as its argument.
// Here, our action will also have an additional attribute called friend, sometimes an action contains multiple attributes for producing a new state.