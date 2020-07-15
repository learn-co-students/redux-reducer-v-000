//initial state should be an object with a key, friends, set to an empty array.
export function manageFriends(state = {friends:[]}, action){
     
        switch (action.type) {
          case 'ADD_FRIEND':
            return {friends: [...state.friends, action.friend]}
          case 'REMOVE_FRIEND':
            let foundFriend = state.friends.findIndex(friend => friend.id == action.id)
            return ({...state, friends:[
                ...state.friends.slice(0, foundFriend),
                ...state.friends.slice(foundFriend +1)
                ]})
          default:
            return state;
        }
      
}
