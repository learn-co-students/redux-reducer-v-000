export function manageFriends(state = { friend: [] }, action) {
  switch (action.type) {
    case 'ADD_FRIEND':
      console.log(action.friend)
      return {
        ...state,
        friends: [...state.friends, action.friend],
      }
    case 'REMOVE_FRIEND':
      console.log(action.id)
      return {
        ...state,
        friends: state.friends.filter(friend => friend.id !== action.id),
      }
    default:
      return state
  }
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
