export function manageFriends(state = {friends: []}, action){

switch(action.type){
    case 'ADD_FRIEND':
    return {
      friends:[ ...state.friends, {
      hometown: action.friend.hometown,
      id: action.friend.id,
      name: action.friend.name
    } ]
  }
      case 'REMOVE_FRIEND':
      return{
        friends: state.friends.filter(function(value){
          return action.id != value.id
          })
        }
    default:
    return state;
  }

}
