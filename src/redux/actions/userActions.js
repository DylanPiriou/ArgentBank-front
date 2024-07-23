import { getUser, login, signup } from "../../API.js";
import { editUser } from "../../API.js";

export const loginAction = (email, password) => async (dispatch) => {
	try {
		const response = await login(email, password);
		const data = await response.json();
		window.localStorage.setItem("token", data.body.token);
		dispatch({ type: "LOGIN_SUCCESS", payload: data });
	} catch (error) {
		dispatch({ type: "LOGIN_FAILURE" });
	}
};

export const fetchUser = () => {
	return (dispatch) => {
		const token = localStorage.getItem("token");
		if (token) {
			getUser(token)
				.then((res) => res.json())
				.then((data) => {
					dispatch({ type: "FETCH_USER_SUCCESS", payload: data });
				})
				.catch(() => {
					dispatch({ type: "FETCH_USER_FAILURE" });
				});
		}
	};
};

export const updateUser = (userId, updatedInfo) => {
	return (dispatch) => {
		const token = localStorage.getItem("token");
		if (token) {
			editUser(userId, updatedInfo, token)
				.then((res) => res.json())
				.then((data) => {
					dispatch({ type: "UPDATE_USER_SUCCESS", payload: data });
				})
				.catch(() => {
					dispatch({ type: "UPDATE_USER_FAILURE" });
				});
		}
	};
};

export const createUser = (userInfo) => {
	return (dispatch) => {
			signup(userInfo)
				.then((res) => res.json())
				.then((data) => {
					dispatch({ type: "CREATE_USER_SUCCESS", payload: data });
				})
				.catch(() => {
					dispatch({ type: "CREATE_USER_FAILURE" });
				});
	};
};

export const logoutUser = () => {
	return (dispatch) => {
		localStorage.removeItem("token");
		dispatch({ type: "LOGOUT" });
	};
};