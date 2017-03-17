export function manageFriends(state, action){
  if (action.type === 'ADD_FRIEND') {

    return {...state, friends: [...state.friends, action.friend]}

  } else if (action.type === 'REMOVE_FRIEND') {

    return {...state, friends: state.friends.filter(friend => {
      return friend.id !== action.id
    })}

  }
  return state
}
