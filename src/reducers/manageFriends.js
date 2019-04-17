export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return { ...state, friends: [...state.friends, action.friend] };

    case "REMOVE_FRIEND":
      const arrayPosition = state.friends.findIndex(
        friend => action.id === friend.id
      );
      return {
        ...state,
        friends: [
          ...state.friends.slice(0, arrayPosition),
          ...state.friends.slice(arrayPosition + 1)
        ]
      };

    default:
      return state;
  }
}
