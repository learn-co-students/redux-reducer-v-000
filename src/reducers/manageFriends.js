export function manageFriends(state = {
  friends: [],
}, action) {
  switch(action.type) {

    case "ADD_FRIEND":
      return Object.assign({}, state, {
        friends: [
          ...state.friends,
          action.friend
        ]
      });

    case "REMOVE_FRIEND":
      const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
      return Object.assign({}, state, {
        friends: [
          ...state.friends.slice(0, removalIndex),
          ...state.friends.slice(removalIndex + 1)
        ]
      });

    default:
      return state;

  }
};

[{ hometown: 'NYC', id: 100, name: 'Avi' }, { hometown: 'Philadephia', id: 102, name: 'Steven' }, { hometown: 'Boston', id: 102, name: 'Steven' }, { hometown: 'Detroit', id: 102, name: 'Steven' }] 

