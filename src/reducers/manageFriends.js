export function manageFriends(state = {friends: []}, action) {
  switch (action.type) {
    case 'ADD_FRIEND':
      return (
        // return a new object with key-value pairs from state with the
        // friends: key overwritten with the current friends values, plus the addition of friend
        {...state, friends: [...state.friends, action.friend]}
      )
    case 'REMOVE_FRIEND':
    // the action has a property of the friends id to be removed
      const removeAtIndex = state.friends.findIndex(friend => friend.id === action.id)

      return (
        {...state,
          friends: [
            // return elements prior to removalIndex
            ...state.friends.slice(0, removeAtIndex),
            // return elements after removeAtIndex
            ...state.friends.slice(removeAtIndex + 1)
          ]
        }
      )

    default:
      return state
  }
}
