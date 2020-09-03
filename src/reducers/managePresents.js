export function managePresents(state, action){
    // Set an default value for the state argument - an object with a key, numberOfPresents, assigned to 0.
    switch (action.type) {
        case 'INCREASE':
            return {numberOfPresents: state.numberOfPresents + 1}
    
        default:
            return {numberOfPresents: 0}
    }
}
