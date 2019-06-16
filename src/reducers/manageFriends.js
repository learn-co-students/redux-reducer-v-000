  let state = {manageFriends: 0}
  let friends = {name: 'Avi', hometown: 'NYC', id: 100}
  let friend = {name: 'Joe', hometown: 'Boston', id: 101}

export function manageFriends(state, action){

    switch (action.type) {
    case 'ADD_FRIEND':
      return manageFriends, {friends: [friends, friend]}
      default:
        return state;
        case "REMOVE_FRIEND":
        const removeFriend = state.friends.findIndex(friend => friend.id === action.id);
        return (
          {...state,
              friends: [
                ...state.friends.slice(0,removeFriend),
                ...state.friends.slice(removeFriend + 1)
              ]
          }
        )

    }
  };
