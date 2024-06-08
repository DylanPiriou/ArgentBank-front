import React from "react";
import Button from "./Button";
import { login } from "../API";
import { Link, useNavigate } from "react-router-dom";

export default function SignInForm() {
	const navigate = useNavigate();


	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const username = formData.get("username");
		const password = formData.get("password");
		const remember = formData.get("remember");

		console.log({ username, password, remember });
		login(username, password)
			.then((response) => {
				if (response.ok) {
					console.log("Login successful");
					return response.json();
				} else {
					console.error("Login failed");
					throw new Error("Login failed");
				}
			})
			.then((data) => {
				if (data.body.token) {
					localStorage.setItem("token", data.body.token);
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
				<label htmlFor="username" className="flex flex-col font-bold">
					Username
					<input
						type="text"
						id="username"
						name="username"
						className="border p-2"
					/>
				</label>
				<label htmlFor="password" className="flex flex-col font-bold">
					Password
					<input
						type="password"
						id="password"
						name="password"
						className="border p-2"
					/>
				</label>
				<label htmlFor="remember" className="flex gap-2">
					<input type="checkbox" name="remember" id="remember" />
					Remember Me
				</label>
				<small>
					No account ? &nbsp;
					<Link to="/register" className="text-secondary">Register now</Link>
				</small>
				<Button text="Sign In" full />
			</form>
		</div>
	);
}
