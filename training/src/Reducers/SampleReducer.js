export default (state = [], action) => {
    switch (action.type) {
        case "GET_ALL_SAMPLE_CONTENT":
            return {
                content: [
                    // ...state.content,
                    ...action.payload
                ]
            };
        default:
            return state;
    }
};