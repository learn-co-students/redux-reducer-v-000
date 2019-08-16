export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      // return Object.assign({}, state, {
      //   friend: {
      //     name: action.friend.name,
      //     hometown: action.friend.hometown,
      //     id: action.friend.id
      //   }
              
    return {...state,
      friend: {
        name: action.friend.name,
        hometown: action.friend.hometown,
        id: action.friend.id
      }
    }
      // return {...action.friend,
      //   name: state.friend.name,
      //   hometown: state.friend.hometown,
      //   id: state.friend.id + 1
      // }
    // case 'REMOVE_FRIEND':
    default:
          return state  
  }     
}

