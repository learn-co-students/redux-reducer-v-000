export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      let newFriend = Object.assign({}, state, {friends: [...state.friends, action.friend]})
      return newFriend
    case 'REMOVE_FRIEND':
      let removeFriend = state.friends.findIndex( friend => friend.id === action.id )
      return Object.assign({}, state, {
          friends: [
            ...state.friends.slice(0, removeFriend),
            ...state.friends.slice(removeFriend + 1)
          ]
        });
    default:
      return state;
  }
}
