export function managePresents(state, action){
  if (action.type === "INCREASE") {
    return {
      numberOfPresents: state.numberOfPresents + 1
    }
  }
  if (action.type !== action) {
    return {
      ...state
    }
  }
}
