export function manageFriends(state, action){

  switch (action.type) {
    case "ADD_FRIEND":
      return (
        {...state,
            friends: [
              ...state.friends,
              action.friend
            ]
        }
    )
    case 'REMOVE_FRIEND':
      return Object.assign({}, state, {
        friends: [...state.friends.filter(item => item.id !== action.id)],
      });

  /* case "REMOVE_FRIEND":
    const removalId = state.friends.findIndex(friend => friend.id === action.id)
      return (
        {...state,
          friends: [
            ...state.friends.slice(0, removalId),
            ...state.friends.slice(removalId + 1)
          ]
        }
      )
  */
    default:
      return state;
  }
}
