const staffReducer = (state = { data: null }, action) => {
    switch (action.type) {
        case "POST_STAFF":
            return { ...state }
        case "FETCH_ALL_STAFFS":
            return { ...state, data: action.payload }
        default:
            return state;
    }
}

export default staffReducer;