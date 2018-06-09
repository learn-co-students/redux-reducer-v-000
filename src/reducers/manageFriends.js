export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friend, action.friend]}
    case 'REMOVE_FRIEND':
      const id = action.id
      let friendCopy = []
        for (x of action.friends) {
          if (x.id !== id) {
            friendCopy << x
          }
        }
      return {friends: friendCopy}
    default:
      return state
  }
}
