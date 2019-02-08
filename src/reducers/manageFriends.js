export function manageFriends(state = {
    friends: [
      {
        name: 'Avi',
        hometown: 'NYC',
        id: 100
      }
    ],
  }, action){

    switch(action.type){
        case 'ADD_FRIEND':
            return (
                {...state,
                    friends:[
                        ...state.friends,
                        action.friend
                    ] 
                }
            )
        
        case 'REMOVE_FRIEND':
                const findId = state.friends.findIndex(friend => friend.id === action.id)
            return(
                {...state,
                    friends:[
                        ...state.friends.slice(0, findId),
                        ...state.friends.slice(findId + 1)
                    ]

                }
            )
            
        default:
            return state
    }
        

}
