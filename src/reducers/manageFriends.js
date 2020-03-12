//let state = {friends: []}

export function manageFriends(state, action){
  switch(action.type) {
    case 'ADD_FRIEND':
      let newArr = state.friends.slice()
      newArr.push({
        name: action.friend.name,
        hometown: action.friend.hometown,
        id: action.friend.id
      })
      return {friends: newArr}
    case 'REMOVE_FRIEND':
      let newFriends = Object.assign({}, state, {friends: state.friends.filter(friend => friend.id !== action.id)})
      return {friends: newFriends.friends}
    default:
      return state
  }
}
