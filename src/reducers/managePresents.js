// In managePresents.js, write a function called managePresents that takes in an action
// and the previous state as its argument. Actions passed into this reducer only have a type
// attribute, so they would look something like this:
// action = {
//   type: "INCREASE"
// }


export function managePresents(state, action){
  switch (action.type) {
    case "INCREASE":
      return {...state, numberOfPresents: state.numberOfPresents + 1};
    default:
      return state;
  }
}
