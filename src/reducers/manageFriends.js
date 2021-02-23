export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      const addState = Object.assign({}, state);
      addState.friends.push(action.friend);
      // console.log('state:', state);
      // console.log('addState:', addState);
      
      return addState;
    case 'REMOVE_FRIEND':
      console.log('state before:', state)

      const isId = (element) => element.id == action.id;
      const index = state.friends.findIndex(isId);
      
      const friendsAry = [];
      state.friends.map((friend) => {
        friendsAry.push(friend)
      });

      friendsAry.splice(index, 1); 
      console.log('state after:', state)

      // rmState = Object.assign(rmState, state);
      // console.log('rmState before:', rmState);
      // rmState.friends.splice(index, 1);

      // return rmState;
 
      const newState = Object.assign({}, state, {
        friends: friendsAry
      });
      // console.log('newState after:', newState);
      return newState;
    default:
      return state;
  }
}
