let state = {
  friends: [
    {
      name: 'Avi',
      hometown: 'NYC',
      id: 100
    }
  ],
};

export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return  {friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
    return {
      friends: [...state.friends.filter((f) => f.id !== action.id)]
    }
  default:
      return state
    }
  }
