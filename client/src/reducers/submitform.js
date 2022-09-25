const submitFormReducer = (state = { data: null }, action) => {
    switch (action.type) {
        case "POST_SUBMITFORM":
            return { ...state }
        case "FETCH_ALL_SUBMITFORMS":
            return { ...state, data: action.payload }
        default:
            return state;
    }
}

export default submitFormReducer;