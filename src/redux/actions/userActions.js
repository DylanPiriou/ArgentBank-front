import { getUser } from "../../API.js";
import { editUser } from "../../API.js";

export const fetchUser = () => {
	return (dispatch) => {
		const token = localStorage.getItem("token");
		if (token) {
			getUser(token)
				.then((res) => res.json())
				.then((data) => {
					dispatch({ type: "FETCH_USER_SUCCESS", payload: data });
				})
				.catch((error) => {
					dispatch({ type: "FETCH_USER_FAILURE", payload: error });
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
				.catch((error) => {
					dispatch({ type: "UPDATE_USER_FAILURE", payload: error });
				});
		}
	};
};

