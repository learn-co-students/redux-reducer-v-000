const defaultState = { numberOfPresents: 0 };

export function managePresents(state = defaultState, action) {
  switch (action.type) {
    case "INCREASE": {
      const numberOfPresents = state.numberOfPresents + 1;
      return { ...state, numberOfPresents };
    }
    default:
      return state;
  }
}
