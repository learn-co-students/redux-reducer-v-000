// Write a function called managePresents() that takes in the previous state and 
  // an action as its argument. Set a default value for the state argument - 
  // an object with a key, numberOfPresents, assigned to 0.
// Actions passed into this reducer will only have a type attribute

export function manageFriends(state = {
    friends: [],
  }, action) {
    switch(action.type) {
  
      case "ADD_FRIEND":
        return (
          {...state,
              friends: [
                ...state.friends,
                action.friend
              ]
          }
      )
  
      case "REMOVE_FRIEND":
        const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
        return (
          {...state,
              friends: [
                ...state.friends.slice(0, removalIndex),
                ...state.friends.slice(removalIndex + 1)
              ]
          }
        )
  
      default:
        return state;
  
    }
  };