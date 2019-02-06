export function manageFriends(state = {
  friends: []
}, action) {
  switch (action.type) {
  	case 'ADD_FRIEND':
  	  return {...state, friends: [...state.friends, action.friend]};
  	case 'REMOVE_FRIEND':
  	  const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
  	  return {...state, friends: [...state.friends.slice(0, removalIndex), ...state.friends.slice(removalIndex + 1)]};
  	default:
  	  return state;
  }
}
// manageFriends reducer function criteria:
// adds the friend when type is 'ADD_FRIEND' and the action has a friend property with a name, hometown and id.
// removes the friend when action type is 'REMOVE_FRIEND' and the action has a property of the friend's id to be removed
// the friends key in the state object points to an array of friend objects (by default, an empty array)
// each friend object in the array has 3 key/value pairs for name, hometown and id
// findIndex() is called on an array & returns the index of the first element in the array that satisfies the provided testing function.
// Otherwise, it returns -1, indicating no element passed the test.