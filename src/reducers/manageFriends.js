export function manageFriends(state, action){

    switch (action.type) {
      case 'ADD_FRIEND':
        return { friends: [...state.friends, action.friend] }

      case 'REMOVE_FRIEND':
        return {
          friends: [
            ...state.friends.slice(0, state.friends.findIndex( friend => friend.id === action.id)),
            ...state.friends.slice(state.friends.findIndex( friend => friend.id === action.id) + 1)
          ]
        }

      default:
        return state
    }

}


//...state, friends: { action.friend }
