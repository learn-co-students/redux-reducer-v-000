export function manageFriends(state, action){
    switch (action.type) {
    case 'ADD_FRIEND':
      return ({
          ...state, friends: [...state.friends, action.friend]
        })

    case 'REMOVE_FRIEND':

    //try using filter next go around!
    const removeFriend = state.friends.findIndex(friends => friends.id === action.id)
       return (
           {
               ...state,
                friends: [
                    ...state.friends.slice(0, removeFriend),
                    ...state.friends.slice(removeFriend + 1)
                ]
           }
       )
       default:
       return state;
   }
  }