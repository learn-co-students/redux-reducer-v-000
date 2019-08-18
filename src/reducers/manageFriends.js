export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {
        ...state,
        friends: state.friends.concat(action.friend)
      }
    
    case 'REMOVE_FRIEND':
      return {
        ...state,
        friends: state.friends.filter(({ id }) => id !== action.data)
      }
    default:
          return state  
  }     
}
