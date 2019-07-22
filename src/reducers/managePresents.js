export function managePresents(state, action){

    switch (action.type) {
        case 'INCREASE':
          return {numberOfPresents: state.numberOfPresents + 1}
        // case 'DECREASE_COUNT':
        //   return {count: state.count - 1}
        default:
          return state;
      }
      
}

