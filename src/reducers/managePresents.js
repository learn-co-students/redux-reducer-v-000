// let state = { numberOfPresents: 0 };
// let action = {
//   type: "INCREASE",
//   type: "DECREASE"
// }

export function managePresents(state, action){
  switch (action.type) {
    case "INCREASE":
      return {numberOfPresents: state.numberOfPresents + 1}
    case "DECREASE":
      return {numberOfPresents: state.numberOfPresents - 1}
    default:
      return state;  
  }
}

