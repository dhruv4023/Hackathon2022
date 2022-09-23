const serviceReducer = (state = { data: null }, action) => {
    switch (action.type) {
        case "POST_SERVICE":
            return { ...state }
        case "FETCH_ALL_SERVICES":
            return { ...state, data: action.payload }
        default:
            return state;
    }
}

export default serviceReducer;