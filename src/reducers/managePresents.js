export function managePresents(state, action){
    switch(action.type) {
        case 'INCREASE':
            return {...state, numberOfPresents: state.numberOfPresents + 1}
        // Always return SOMETHING (not null nor undefined)
        default:
            return state;
    }
}