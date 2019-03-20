const searchReducer = (state = [], action) => {
    console.log(state)
    switch (action.type) {
        case 'SET_IMAGES':
            return action.payload;

        default:
            return state;
    }
}
export default searchReducer