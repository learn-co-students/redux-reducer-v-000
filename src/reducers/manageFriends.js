export function manageFriends(state, action){
  switch(action.type) {
    case "ADD_FRIEND":
        return Object.assign({}, state, { friends: [...state.friends, action.friend] })
    case 'REMOVE_FRIEND':
        const friendsArr = [...state.friends]
        return Object.assign({}, state, { friends: friendsArr.filter(friend => friend.id !== action.id )})
    default:
        return state;
    }    
  }

