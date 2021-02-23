export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      const addState = Object.assign({}, state);
      addState.friends.push(action.friend);
      return addState;
    case 'REMOVE_FRIEND':
      const isId = (element) => element.id === action.id;
      const index = state.friends.findIndex(isId);
      const friendsAry = [];
      state.friends.map((friend) => {
        friendsAry.push(friend)
      });
      friendsAry.splice(index, 1);
      const newState = Object.assign({}, state, {
        friends: friendsAry
      });
      return newState;
    default:
      return state;
  }
}
