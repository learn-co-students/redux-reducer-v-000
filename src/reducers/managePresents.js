
//Set an default value for the state argument - an object with a key, numberOfPresents, assigned to 0.
export function managePresents(state = {numberOfPresents: 0}, action){
    switch (action.type) {
        case 'INCREASE':
          return {numberOfPresents: state.numberOfPresents + 1}
        default:
          return state;
      }

}
