export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
    return {friends: [
      ...state.friends, action.friend
    ]};
    case 'REMOVE_FRIEND':
    // const removeFriend = state.friends.findIndex(friend => friend.id === action.id);
    // return {friends: [
    //   ...state.friends.slice(0, removeFriend),
    //   ...state.friends.slice(removeFriend + 1)
    // ]}
    return {friends: state.friends.filter( friend => {
      return friend.id !== action.id
    })}
    default:
    return state;
  }
}
