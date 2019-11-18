let state = { friends: [] };

export function manageFriends(state, action) {
  switch (action.type) {
    case 'ADD_FRIEND':
      return {
        friends: [...state.friends, action.friend]
      };
    case 'REMOVE_FRIEND':
      let newFriends = state.friends.filter((item) => item.id !== action.id)
      return { friends: newFriends }
    default:
      return state;
  }
}


