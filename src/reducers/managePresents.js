export function managePresents(state = { numberOfPresents: 0 }, action){
  return {...state, numberOfPresents: action.type === "INCREASE" ? state.numberOfPresents + 1 : state.numberOfPresents}

  // if (action.type === "INCREASE"){
  //   return { numberOfPresents: state.numberOfPresents + 1 }
  // } else { return state }

  // switch(action.type){
  // case "INCREASE":
  //   return {
  //     ...state,
  //     numberOfPresents: state.numberOfPresents + 1
  //   }
  // default: return state
  // }
}

