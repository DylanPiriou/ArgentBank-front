const initialState = {
	token: localStorage.getItem("token") || null,
	isConnected: localStorage.getItem("token") ? true : false,
	user: {},
	status: null,
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case "LOGIN_SUCCESS":
			localStorage.setItem("token", action.payload.body.token);
			return {
				...state,
				token: action.payload.body.token,
				isConnected: true,
				status: "succeeded",
			};
		case "LOGIN_FAILURE":
			return {
				...state,
				status: "failed",
			};
		case "FETCH_USER_SUCCESS":
			return {
				...state,
				user: action.payload.body,
				status: "succeeded",
			};
		case "FETCH_USER_FAILURE":
			return {
				...state,
				status: "failed",
			};
		case "LOGOUT":
			return {
				...state,
				token: null,
				user: {},
				isConnected: false,
				status: null,
			};
		default:
			return state;
	}
};

export default userReducer;
