export function manageFriends(state, action){
  switch (action.type){

    case 'Random Action Type': 
        !Object.keys(state).includes(action.type)
      return state

    case "ADD_FRIEND":
    return Object.assign({}, state, {
      friends: [
        ...state.friends,
        action.friend
      ]
    });
    
    case 'REMOVE_FRIEND':
      const unfriend_id = state.friends.findIndex(friend => friend.id === action.id)
      return Object.assign({}, state, {
        friends: [
          ...state.friends.slice(0, unfriend_id), 
          ...state.friends.slice(unfriend_id + 1)
        ]
      });
   
    default:
        return state
    }
  }

