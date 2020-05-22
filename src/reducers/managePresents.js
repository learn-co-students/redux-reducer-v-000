
export function managePresents(state = {
  numberOfPresents: 0,
}, action) {
  switch(action.type) {

    case "INCREASE":
      return {...state,
        numberOfPresents: state.numberOfPresents + 1
      };
      //"Return a new object that contains all the key-value pairs 
      //from dog copied over with the age key overwritten with a new value"

      //same:
      // return Object.assign({}, state, {
      //   numberOfPresents: state.numberOfPresents + 1
      // });
      //"Start with a new empty object, 
      //copy over everything from the original state, then overwrite the numberofpresents property with a new value."

    default:
      return state;
  }
};
