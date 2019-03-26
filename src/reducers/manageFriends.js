export function manageFriends(state, action){
  if (action.type === 'REMOVE_FRIEND') {
    let index = state.friends.findIndex(x => x.id === action.id)
    let newArr = [...state.friends]
    let spliced = newArr.splice(index, 1)
    spliced
    return {
      friends: newArr
    }
  }
  if (action.type === 'ADD_FRIEND') {
    return {
      friends: [...state.friends, action.friend]
    }
  }
  if (action.type !== action) {
    return {
      ...state
    };
  }
}
