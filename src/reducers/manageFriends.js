export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
        return { friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      return {friends: state.friends.filter(function(e){return e.id !== action.id}) }
      break;
    default:
      return state
  }
}
