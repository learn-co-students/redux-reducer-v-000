export function managePresents(state = {
  numberOfPresents: 0,
}, action) {
  switch (action.type) {

    case 'INCREASE':
      // start with a new object {}, copy over everything from the original, then overwrite numberOfPresents with a new value
      return Object.assign({}, state, {
        numberOfPresents: state.numberOfPresents + 1
      });

    default:
      return state;
  };
};
