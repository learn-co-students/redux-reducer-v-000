export function manageFriends(state, action){
  switch (action.type) {
    case ('ADD_FRIEND'):
      const friend = action.friend
      const friends = [...state.friends, friend]
      return {...state, friends}
    case ('REMOVE_FRIEND'):
      const id = action.id
      const res = state.friends.filter(f => f.id !== id)
      return {...state, friends: res}
    default: return state
  }
}
