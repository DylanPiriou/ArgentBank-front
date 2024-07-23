import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import InputField from "./InputField";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/actions/userActions";
import store from "../redux/store";
import { useEffect } from "react";

export default function SignInForm() {

	// On récupère les infos du store
	const { status } = useSelector((state) => state.user);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (status === "success") {
			toast.success("Connexion réussie. Bienvenue !");
			navigate("/profile");
		} else if (status === "error") {
			toast.error("La connexion a échoué. Veuillez réessayer.");
		}
	}, [status, navigate]);

	const handleSubmit = async (event) => {
		event.preventDefault();

		const formData = new FormData(event.target);
		const username = formData.get("username");
		const password = formData.get("password");
		// const remember = formData.get("remember");

		try {
			dispatch(loginAction(username, password));
		} catch (error) {
			toast.error("Une erreur est survenue. Veuillez réessayer.");
		}
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
