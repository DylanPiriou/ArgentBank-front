const initialState = {
	user: null,
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.payload,
			};
		case "UPDATE_USER":
			return {
				...state,
				user: {
					...state.user,
					...action.payload,
				},
			};
		case "LOGOUT":
			return {
				...state,
				user: null,
			};
		default:
			return state;
	}
};
