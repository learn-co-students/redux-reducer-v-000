export function manageFriends(state, action){
  switch(action.type){
    case 'ADD_FRIEND':
      return Object.assign({}, state, {friends: [...state.friends, action.friend]})
    case 'REMOVE_FRIEND':
      console.log(state.friends)
      console.log(`::::${action.id}`)
      console.log(state.friends.filter(friend => friend.id !== action.id))
      console.log("::::")
      return Object.assign({}, state, {friends: [...state.friends.filter(friend => friend.id !== action.id)]})
    default:
      return state
  }
}
