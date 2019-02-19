export function manageFriends(state, action){
  switch (action.type){
    case 'ADD_FRIEND':
      return (
        {...state, friends: [ ...state.friends, action.friend ]}
      )
    case 'REMOVE_FRIEND':
      let index = state.friends.findIndex(element => element.id === action.id);
      let newfriends = state.friends.slice(0, index).concat(state.friends.slice(index + 1))
      return {...state, friends: newfriends}
    default:
      return state;
  }
}