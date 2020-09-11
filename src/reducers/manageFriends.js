
// console logs
// console.log("action.friend------------", action.friend)
// console.log("action.type------------", action.type)
// console.log("state------------", state)
// console.log("state.fr

// console.log("remove- action.type!!!!!!!!!!!!!", action.type)
// console.log("remove- action.id!!!!!!!!!!!!!", action.id)
//
// console.log("-------------------")
// console.log("REMOVE_FRIEND tests-------------------")
// console.log("remove- action!!!!!!!!!!!!!", action)
// console.log("remove- state.friends!!!!!!!!!!!!!", state.friends)
// console.log("filter test", state.friends.filter((item) => item.index !== 1));

export function manageFriends(state={friends: []}, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return { ...state, friends: [...state.friends, action.friend]}
    case "REMOVE_FRIEND":

      // //
      // const stateSearch = (element) => element.id === action.id;
      // return state.friends.filter((item) => item.id !== action.id)

      return { ...state, friends: state.friends.filter((item) => item.id !== action.id)}

      // this is a common thing in redux, it's your best friend start with ...state
      // common error in redux is when people do deletes but don't properly deal
    default:
      return state;
  }
}



// are you eager to learn.
// you're in the home stretch, it's the light at the end of the tunnel
