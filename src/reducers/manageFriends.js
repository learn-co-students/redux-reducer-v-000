export function manageFriends(state, action){
  switch (action.type) {

    case "ADD_FRIEND":
      return Object.assign({}, state, {
        friends: [
          ...state.friends,
          action.friend
        ]
      });

      case "REMOVE_FRIEND":
          // finds the index in the array of the element that satisfies the condition:
        const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
          // then create a new object, add state, and merge the rest in
        return Object.assign({}, state, {
          friends: [
              // take from friends array everything up to the element to be removed
            ...state.friends.slice(0, removalIndex),
              // and add to friends array everything after the element to be removed,
              // so you skip that whcih is to be removed
            ...state.friends.slice(removalIndex + 1)
          ]
        });

    default:
      return state
  }
}
