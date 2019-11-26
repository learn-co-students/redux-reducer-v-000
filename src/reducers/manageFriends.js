let state = {friends: []}

export function manageFriends(state, action){
	switch (action.type) {
    case 'ADD_FRIEND':
      const newFriend = {name: action.friend.name,
          hometown: action.friend.hometown,
          id: action.friend.id}
      const newState = {...state}
      newState.friends.push(newFriend)  //push onto copy of original array
      return newState
    case 'REMOVE_FRIEND':
      const id = action.id 
      return {
      		...state, 
            friends: state.friends.filter(friend => friend.id !== id)
             }
    default:
      return state;
  }
}

/*

state = [{
	id: 1,

}];



*/