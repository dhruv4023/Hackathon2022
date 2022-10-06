const homedataReducer = (state = { data: null }, action) => {
    switch (action.type) {
        case "POST_HOMEDATA":
            return { ...state }
        case "FETCH_ALL_HOMEDATA":
            return { ...state, data: action.payload }
        default:
            return state;
    }
}

export default homedataReducer;