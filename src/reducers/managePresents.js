export function managePresents(state, action) {
	let curr = state;
	switch(action.type) {
		case "INCREASE":
			return {...curr, numberOfPresents: curr.numberOfPresents + 1};

		default:
      		return state;
	}


}
