const doubtReducer = (state = { data: null }, action) => {
    switch (action.type) {
        case "POST_DOUBT":
            return { ...state }
        case "FETCH_ALL_DOUBTS":
            return { ...state, data: action.payload }
        default:
            return state;
    }
}

export default doubtReducer;