const state = {
  friends: []
}
export function manageFriends(state, action){
  switch(action.type){
    case 'ADD_FRIEND':
      return (
        {...state,
          friends: [...state.friends, action.friend]
        });
        
    
    case 'REMOVE_FRIEND':
      let foundFriend = state.friends.findIndex(friend => friend.id === action.id);
      return (
        // returns state (without 'friends' key)
        {...state,
        //modifies friends property
            friends: 
              ...state.friends.slice(0, foundFriend),
              ...state.friends.slice(foundFriend + 1)
            ]
        }
      )
    
    default:
      return state;
  }
}
