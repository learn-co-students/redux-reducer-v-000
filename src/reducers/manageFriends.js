export function manageFriends(state, action){
   switch (action.type) {
    case 'ADD_FRIEND':
      return { friends: state.friends.concat(action.friend) };
    case 'REMOVE_FRIEND':
    	const removedArray = () => {
    		return state.friends.filter(friend => {
    			return friend.id != action.id;
    		});
    	}
      return { friends: removedArray() };
    default:
      return state;
  }
}