export function manageFriends(state ={ friends: [], }, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return ({...state, friends: [...state.friends, action.friend]
      })
    case 'REMOVE_FRIEND':
    //Finding the friend ID from the action ID
     const removalFriend = state.friends.findIndex(friend => friend.id === action.id);
      return({...state, friends: [...state.friends.slice(0, removalFriend), ...state.friends.slice(removalFriend + 1)]
      })
    default:
      return state;
  }
}
