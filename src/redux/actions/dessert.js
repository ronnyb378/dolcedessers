export function actionAdd(dessert) {
    return {
        type: "ADD",
        dessert: dessert 
    }
}

export function actionRemove(dessert) {
    return {
        type: "REMOVE",
        dessert: dessert 
    }
}