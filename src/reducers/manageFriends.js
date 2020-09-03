export function manageFriends(state, action){

  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends:  [...state.friends, action.friend] }
    case 'REMOVE_FRIEND':
      let newfriends = [] 
      state.friends.forEach((friend)=> {
           if(friend.id !== action.id){
             newfriends.push(friend)
           }
      } )
      return {friends: newfriends}
    default:
      return state;
  }


}
