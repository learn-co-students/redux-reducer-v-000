export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return Object.assign({}, state, { friends: [...state.friends, action.friend] })
    case 'REMOVE_FRIEND':
      return Object.assign({}, state, { friends: state.friends.filter(function(friend){
        return friend.id != action.id
      })
    })
    default:
      return state
  }
}

function removeFriend(friend, id){
  friend.id != id
}
