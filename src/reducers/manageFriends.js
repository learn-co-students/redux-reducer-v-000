export function manageFriends(state, action){


	let friend = action.friend

	switch (action.type) {
	case 'ADD_FRIEND':
	  return  {friends: state.friends.concat(friend)}

	case 'REMOVE_FRIEND':
	  return {friends: state.friends.filter(friend => friend.id !== action.id)}

	default:
	  return state;
	}




}



// let olderDog = Object.assign({}, dog, {age: dog.age + 1})
// let olderDog = {...dog, age: dog.age + 1}