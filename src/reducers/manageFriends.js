export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      const newFriend = {'name': action.friend.name, 'hometown': action.friend.hometown, 'id': action.friend.id}
      return {friends: (state.friends).concat(newFriend)}
    case 'REMOVE_FRIEND':
      if(action.hasOwnProperty('id')){
        const newList = (state.friends).filter(function(el) {
          return el.id !== action.id;
        });
        return {friends: newList}
      }
    default:
      console.log('default called')
      return state
  }

}
