import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	token: localStorage.getItem("token") || null,
	user: null,
	status: "idle",
	error: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setToken: (state, action) => {
			state.token = action.payload;
			localStorage.setItem("token", action.payload);
		},
		logout: (state) => {
			state.token = null;
			state.user = null;
			localStorage.removeItem("token");
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUserProfile.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchUserProfile.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.user = action.payload;
			})
			.addCase(fetchUserProfile.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			.addCase(updateUserProfile.pending, (state) => {
				state.status = "loading";
			})
			.addCase(updateUserProfile.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.user = action.payload;
			})
			.addCase(updateUserProfile.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			});
	},
});

// Action asynchrone pour récupérer les informations utilisateur
export const fetchUserProfile = createAsyncThunk(
	"auth/fetchUserProfile",
	async (token, { rejectWithValue }) => {
		try {
			const response = await fetch(
				"http://localhost:3001/api/v1/user/profile",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				}
			);
			const data = await response.json();
			if (response.ok) {
				return data.body;
			} else {
				return rejectWithValue(data.message);
			}
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

// Action asynchrone pour mettre à jour les informations utilisateur
export const updateUserProfile = createAsyncThunk(
	"auth/updateUserProfile",
	async ({ token, userData }, { rejectWithValue }) => {
		try {
			const response = await fetch(
				"http://localhost:3001/api/v1/user/profile",
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify(userData),
				}
			);
			const data = await response.json();
			if (response.ok) {
				return data.body;
			} else {
				return rejectWithValue(data.message);
			}
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

// Définition de l'action asynchrone pour la création de compte
export const createUser = createAsyncThunk(
	"auth/createUser",
	async (userData, { rejectWithValue }) => {
		try {
			const response = await fetch("http://localhost:3001/api/v1/user/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userData),
			});
			const data = await response.json();
			console.log(data)
			if (response.ok) {
				console.log(response)
				return data; // Supposons que l'API renvoie les données de l'utilisateur et un token
			} else {
				console.log(data.message);
				return rejectWithValue(data.message);
			}
		} catch (error) {
			console.log(error)
			return rejectWithValue(error.message);
		}
	}
);

export const { setToken, logout } = authSlice.actions;

export default authSlice.reducer;
