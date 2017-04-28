export function manageFriends(state, action){
  switch(action.type) {
    case 'ADD_FRIEND':
      return {...state, friends: state.friends.concat(action.friend)}
    case 'REMOVE_FRIEND':
      const index = state.friends.findIndex(f => f.id === action.id)
      const newFriendsArray = [...state.friends]
      newFriendsArray.splice(index, 1)
      return {...state, friends: newFriendsArray }
    default:
      return state
  }
}
