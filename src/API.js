const path = "http://localhost:3001";

export const login = (email, password) => {
    return fetch(`${path}/api/v1/user/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		});
};

export const signup = (body) => {
	return fetch(`${path}/api/v1/user/signup`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});
};

export const getUser = (token) => {
    return fetch(`${path}/api/v1/user/profile`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		});
}

export const editUser = (token, body) => {
    return fetch(`${path}/api/v1/user/profile`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(body),
		});
}