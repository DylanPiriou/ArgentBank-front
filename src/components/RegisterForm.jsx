import React, { useState } from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import InputField from "./InputField";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/slices/authSlice";

export default function RegisterForm() {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	
	const handleSave = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const firstName = formData.get("firstname");
		const lastName = formData.get("lastname");
		const email = formData.get("email");
		const password = formData.get("password");

		// Vérification que tous les champs sont remplis
		if (!firstName || !lastName || !email || !password) {
			toast.error("Veuillez remplir tous les champs");
			return;
		}

		// Vérification de la longueur du nom et du prénom
		if (firstName.trim().length < 3 || lastName.trim().length < 3) {
			toast.error("Le nom et le prénom doivent contenir au moins 3 caractères");
			return;
		}

		// Vérification de l'email avec un regex
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		if (!emailRegex.test(email)) {
			toast.error("L'email n'est pas valide");
			return;
		}

		const userData = {
			email: email,
			password: password,
			firstName: firstName,
			lastName: lastName,
		};

		try {
			await dispatch(createUser(userData)).unwrap();
			toast.success("Compte créé. Vous pouvez maintenant vous connecter");
			navigate("/login");
		} catch (err) {
			toast.error("Échec de la création du compte, veuillez réassayer.");
			event.target.reset();
		}
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
				onSubmit={handleSave}
				className="w-full flex flex-col items-left justify-center gap-2"
			>
				<InputField
					label="Firtsname"
					id="firstname"
					type="text"
				/>
				<InputField
					label="Lastname"
					id="lastname"
					type="text"
				/>
				<InputField label="Email" id="email" type="email" />
				<InputField
					label="Password"
					id="password"
					type="password"
				/>
				<small>
					Have an account ? &nbsp;
					<Link to="/login" className="text-secondary">
						Sign in now
					</Link>
				</small>
				<Button text="Sign Up" full />
			</form>
		</div>
	);
}
