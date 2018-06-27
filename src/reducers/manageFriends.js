export function manageFriends(state, action){
  switch (action.type){
    case 'ADD_FRIEND':
      return {...state,
        friends: [...state.friends,
           {hometown: action.friend.hometown, id: action.friend.id, name: action.friend.name}
         ]
      }
    case 'REMOVE_FRIEND':
    let friendId = action.id
      return {...state, friends: state.friends.filter(friend => friend.id !== friendId)}
    default:
      return state
  }
}
