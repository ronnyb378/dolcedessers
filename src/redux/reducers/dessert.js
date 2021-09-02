const defaultState = {
    empanadasStrawberry: 0,
    empanadasPineapple: 0,
    empanadasNutella: 0,
    empanadasCajeta: 0,
    chocolateStrawberry: 0,
    poundCake: 0,
    cookieChocolate: 0,
    cookieChoWalnut: 0,
    cookieWhiteMacadamia: 0,
    cookieWhiteCranberries: 0,
};

function dessert(state=defaultState, action) {
    switch (action.type) {
        case "REMOVE":
            return {
                ...state,
                [action.dessert]: state[action.dessert] - 1  
            };
        case "ADD":
            return {
                ...state,
                [action.dessert]: state[action.dessert] + 1
            };
        default:
            return state;
    }
}

export default dessert;