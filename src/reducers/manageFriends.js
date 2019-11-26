let state = {friends: []}

export function manageFriends(state, action){
	switch (action.type) {
    case 'ADD_FRIEND':
      const newFriend = {name: action.friend.name,
          hometown: action.friend.hometown,
          id: action.friend.id}
      const newState = {...state}
      newState.friends.push(newFriend)
      return newState
    case 'REMOVE_FRIEND':
      
    default:
      return state;
  }
}

/*

state = [{
	id: 1,

}];



*/