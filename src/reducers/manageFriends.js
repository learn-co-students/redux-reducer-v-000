export function manageFriends(state, action){
  switch (action.type) {

    case 'ADD_FRIEND':
      return Object.assign({}, state, {
        friends: [...state.friends, action.friend]
      })

    case 'REMOVE_FRIEND':
      const friendArray = state.friends.slice()
      const removalIndex = friendArray.findIndex(friend => friend.id === action.id)
      friendArray.splice(removalIndex, 1)
      return Object.assign({}, state, {
        friends: friendArray
      })

    default:
      return state
  }
}
