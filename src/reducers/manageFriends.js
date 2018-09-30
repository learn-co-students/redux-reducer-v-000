export function manageFriends(state, action) {
  switch (action.type) {
    case 'ADD_FRIEND':
      let friends = [];
      friends.push(...state.friends, action.friend);
      return {
        friends
      };
    case 'REMOVE_FRIEND':
      friends = state.friends;
      friends = friends.filter(friend => friend.id !== action.id);
      console.log(friends);
      return { friends };
    default:
      return state;
  }
}
