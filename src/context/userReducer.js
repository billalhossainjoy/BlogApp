export const reducer = (state, action) => {
	switch (action.type) {
        case "login":
            return {
                status: true,
                userData: action.payload,
            };
        case "logout":
            return {
                status: false,
                userData: null,
            };
        default:
            return state;
    }
}