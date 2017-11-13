export function managePresents(state, action){
  switch (action.type) {
    case 'Random Action Type':
      return state
    case 'INCREASE':
      return {numberOfPresents: state.numberOfPresents + 1}
    default: 
      return state;
    }
  }
