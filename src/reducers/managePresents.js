let state = {numberOfPresents: 0}

//send data from application to store

export function managePresents(state, action){
	switch (action.type) {
    case 'INCREASE':
      return {numberOfPresents: state.numberOfPresents + 1}
    default:
      return state;
  }
}
