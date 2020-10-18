
let state = {friends: []}
export function manageFriends(state, action) {

  switch (action.type) {
    case 'ADD_FRIEND':
      return ({...state, friends: [...state.friends, action.friend]})

      case 'REMOVE_FRIEND':
        const idToRemove = (element) => element.id === action.id
        const indexToRemove = state.friends.findIndex(idToRemove)
        return (

          {...state, friends: [
            ...state.friends.slice(0, indexToRemove),
            ...state.friends.slice(indexToRemove + 1)
            ]
          }
        )




        default: return state



  }

}
