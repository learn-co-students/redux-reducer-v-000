let state = {friends: []};

export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return Object.assign({}, state, {
        friends: [...state.friends, action.friend]
      });

    case "REMOVE_FRIEND":
      var friends = state.friends.filter(friend => friend.id != action.id);
      return Object.assign({}, state, {
        friends
      });

    default:
      return state;
  }
};
