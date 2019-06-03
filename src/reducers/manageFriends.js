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
  

//learn solution is the same except that they set state friends to default empty array

//export function manageFriends(state = {
//  friends: [],
//}, action) {
//    switch(action.type) {
//      case 'ADD_FRIEND':
//        return (
//          {...state,
//              friends: [
//                ...state.friends,
//                action.friend
//              ]
//          }
//        )

//      case 'REMOVE_FRIEND':
//        const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
//        return (
//          {...state,
//              friends: [
//                  ...state.friends.slice(0, removalIndex),
//                  ...state.friends.slice(removalIndex + 1)
//              ]
//          }
//        )

//        default:
//          return state;
//    }
//}
