export function manageFriends(state = { friends: [] }, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {...state, friends: [...state.friends, action.friend] }
      //clone the state object, then overwrite the state's key friends with the second argument
    case 'REMOVE_FRIEND':
      const filteredFriends = state.friends.filter((friend) =>
        friend.id !== action.id
      )
      return {...state, friends: filteredFriends}
    default:
      return {...state};
  }
}
