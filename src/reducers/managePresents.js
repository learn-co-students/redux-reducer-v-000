export function managePresents(state = { numberOfPresents: 0 }, action){
  switch(action.type) {

    case 'INCREASE':
      const newNumberOfPresents = state.numberOfPresents + 1
      return Object.assign({}, state, { numberOfPresents: newNumberOfPresents });

    default:
      return state;
  }
};
