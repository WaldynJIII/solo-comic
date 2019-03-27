const favoritesReducer = (state = [], action) => {
    console.log(state)
    switch (action.type) {
        case 'CREATE':
            return action.payload;
        case 'RESET':
            return []
        default:
            return state;
    }
}
export default favoritesReducer