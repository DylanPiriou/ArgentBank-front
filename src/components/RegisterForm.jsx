import React from "react";
import Button from "./Button";
import { login } from "../API";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterForm() {
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const username = formData.get("username");
		const password = formData.get("password");
		const remember = formData.get("remember");

		console.log({ username, password, remember });
	};

	return (
		<div className="flex flex-col items-center justify-center gap-6 bg-white py-8 px-4 sm:px-8 w-full max-w-[350px]">
			<img
				src="/src/assets/icon-user.svg"
				alt="logo utilisateur"
				className="w-20"
			/>
			<h3 className="text-xl font-bold">Register</h3>
			<form
				onSubmit={handleSubmit}
				className="w-full flex flex-col items-left justify-center gap-2"
			>
				<label htmlFor="firstname" className="flex flex-col font-bold">
					Firstname
					<input
						type="text"
						id="firstname"
						name="firstname"
						className="border p-2"
					/>
				</label>
				<label htmlFor="lastname" className="flex flex-col font-bold">
					Lastname
					<input
						type="text"
						id="lastname"
						name="lastname"
						className="border p-2"
					/>
				</label>
				<label htmlFor="email" className="flex flex-col font-bold">
					Email
					<input
						type="email"
						id="email"
						name="email"
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
				<small>
					Have an account ? &nbsp;
					<Link to="/login" className="text-secondary">
						Sign in now
					</Link>
				</small>
				<Button text="Sign In" full />
			</form>
		</div>
	);
}
