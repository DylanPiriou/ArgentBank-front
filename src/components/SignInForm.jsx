// src/components/SignInForm.js
import React from "react";
import Button from "./Button";
import { login } from "../API";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import InputField from "./InputField";
import { useDispatch } from "react-redux";
import { fetchUserProfile, setToken } from "../redux/slices/authSlice";

export default function SignInForm() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const username = formData.get("username");
		const password = formData.get("password");
		const remember = formData.get("remember");

		login(username, password)
			.then((response) => {
				if (response.ok) {
					toast.success("Connexion réussie. Bienvenue !");
					return response.json();
				} else {
					toast.error("La connexion a échoué. Veuillez réessayer.");
					throw new Error("Login failed");
				}
			})
			.then((data) => {
				if (data.body.token) {
					dispatch(setToken(data.body.token));
					dispatch(fetchUserProfile(data.body.token));
					navigate("/user");
				}
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	return (
		<div className="flex flex-col items-center justify-center gap-6 bg-white py-8 px-4 sm:px-8 w-full max-w-[350px]">
			<img
				src="/src/assets/icon-user.svg"
				alt="logo utilisateur"
				className="w-20"
			/>
			<h3 className="text-xl font-bold">Sign In</h3>
			<form
				onSubmit={handleSubmit}
				className="w-full flex flex-col items-left justify-center gap-2"
			>
				<InputField label="Username" type="text" id="username" required />
				<InputField label="Password" type="password" id="password" required />
				<InputField label="Remember Me" type="checkbox" id="checkbox" />
				<small>
					No account ? &nbsp;
					<Link to="/register" className="text-secondary">
						Register now
					</Link>
				</small>
				<Button text="Sign In" full />
			</form>
		</div>
	);
}
