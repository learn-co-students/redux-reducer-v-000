export function managePresents(state, action){

  state = {
    numberOfPresents: 0
  }

  managePresents = (state, action) => {
    // if (typeof action !== 'INCREASE') {
    //   return state
    // }
    switch (action.type) {
      case 'INCREASE':
        return {numberOfPresents: state.numberOfPresents + 1}
      default:
        return state
    }
  }
}
