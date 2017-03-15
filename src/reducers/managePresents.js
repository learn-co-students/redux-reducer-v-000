export function managePresents(state, action){
  if (!state) {
    const state = {
      numberOfPresents: 0
    }
  }
  if (action.type === "INCREASE") {
    const newState = Object.assign({}, state, {
      numberOfPresents: state.numberOfPresents + 1
    });

    return newState;
  } else {
    return state;
  }
}
