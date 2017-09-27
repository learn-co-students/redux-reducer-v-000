export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      let newfriend = action.friend
      let newFriends = [...state.friends, newfriend]
      return {friends: newFriends}
    case 'REMOVE_FRIEND':
      return Object.assign({}, state, {
        friends: state.friends.filter(function(obj) {
          return obj.id !== action.id
        })
      })
    default:
      return state;
  }
}
