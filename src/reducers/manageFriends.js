export function manageFriends(state, action) {
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]};
    case 'REMOVE_FRIEND':
      const idx = state.friends.findIndex(e => e.id === action.id);
      if (idx !== -1) {
        return {friends: [...state.friends.slice(0,idx),...state.friends.slice(idx+1)]};
      }
      // else fall through to default.
    default:
      return state;
  }
}
