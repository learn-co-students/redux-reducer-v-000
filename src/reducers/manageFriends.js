export function manageFriends(state, action){
  switch(action.type) {
    case 'ADD_FRIEND':
      return {
        friends: state.friends.concat(action.friend)
      }
    case 'REMOVE_FRIEND':
      const index = state.friends.indexOf(action.friend)
      return {
        friends: state.friends.slice(0, index - 1).concat(state.friends.slice(index))
      }
    default:
      return state;
  }
}
