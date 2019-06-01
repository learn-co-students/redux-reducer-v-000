export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
    return {...state,         //spread operator will make a copy of state so you don't alter the actual state
        friends: [             //this is returning the friends array 
            ...state.friends,     //from the copy
            action.friend          //adds the new friend to the existing array copy.
        ]
    }

    case 'REMOVE_FRIEND':
    const friendIndex = state.friends.findIndex(friend => friend.id === action.id) //make variable to find the friend whose ID is same as action ID
    return {...state,     //return a copy of state
        friends: [          //return the copy of the friends array
          ...state.friends.slice(0, friendIndex),   //slice everything up until the friendIndex 
          ...state.friends.slice(friendIndex + 1)   //slice everything after friendIndex.
        ]                                              //The 2 lines above leave you w/everything except the friend you wanted to remove
    }
    default:
      return state;  
  }
}
