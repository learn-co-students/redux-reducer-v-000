export function managePresents(state, action) {
  switch (action.type) {
    case "INCREASE":
      return { numberOfPresents: state.numberOfPresents + 1 }
    case "Random Action Type":
      return state
    default:
      return state
  }
}
