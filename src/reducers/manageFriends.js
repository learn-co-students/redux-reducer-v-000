export function manageFriends(state, action){
  switch (action.type){
    case 'INCREASE':
      return {count: state.count + 1}
    case "ADD_FRIEND":
      return ({...state,friends:[...state.friends,action.friend]})
    case "REMOVE_FRIEND":

      return (
        {...state,
            friends: state.friends.filter(friend => friend.id != action.id)
        }
      )
    default:
      return state;
  }
}
