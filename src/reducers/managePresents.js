export function managePresents(state, action){
    switch(action.type){
        case 'INCREASE':
          return {numberOfPresents: state.numberOfPresents + 1}
        //  case: 'ADD_FRIEND':
        //   return {friends: action.friend}
        case 'REMOVE_FRIEND':
         debugger
         return {friends: state.friends.filter(friend => friend.id !== action.friend.id)}
         default:
         return state;
    }
}
