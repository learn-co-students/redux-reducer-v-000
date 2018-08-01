export function manageFriends(state, action) {
  if (action.type === 'ADD_FRIEND' && action.friend.name && action.friend.hometown && action.friend.id) {
    return { friends: [...state.friends, action.friend] }
  } else if (action.type === 'REMOVE_FRIEND' && action.id) {
    return { friends: state.friends.filter(friend => friend.id !== action.id) }
  } else {
    return state
  };
}
