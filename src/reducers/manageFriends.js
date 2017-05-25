export function manageFriends(state, action){

  switch (action.type) {
    case 'ADD_FRIEND':
      const { hometown, id, name } = action.friend;
      return {
        friends: [...state.friends, {hometown: hometown, id: id, name: name}]
      };
    case 'REMOVE_FRIEND':
      return { friends: state.friends.filter(e => e.id !== action.id) };
    default:
      return state;
  }
}
