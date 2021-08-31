const defaultState = {
    joke: []
}

export function bakingjokes(state=defaultState, action) {
    switch (action.type) {
        case "SET_BAKING_JOKES":
            return {
                joke: [...state.joke, action.joke]
            }
        default:
            return state;
    }
}