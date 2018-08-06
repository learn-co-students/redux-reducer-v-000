export function manageFriends(state, action){
   switch (action.type) {    
       case 'ADD_FRIEND':
           return {friends: [
               ...state.friends, action.friend
           ]}
       case 'REMOVE_FRIEND':
           return {friends: [
               ...state.friends.filter(friend => friend.id !== action.id)
           ]}
       default:
           return state
   }
}

let state = { friends: [{
    name: null,
    hometown: null,
    id: null
}] }


