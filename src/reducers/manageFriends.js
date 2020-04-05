const defaultState = { friends: [] };

export function manageFriends(state = defaultState, action) {
  switch (action.type) {
    case "ADD_FRIEND": {
      const friends = [...state.friends, action.friend];
      return { ...state, friends };
    }
    case "REMOVE_FRIEND": {
      const friends = [...state.friends];
      const index = friends.findIndex(({ id }) => id === action.id);
      friends.splice(index, 1);
      return { ...state, friends };
    }
    default:
      return state;
  }
}
