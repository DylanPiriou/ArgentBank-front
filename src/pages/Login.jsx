import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SignInForm from "../components/SignInForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {

	// On récupère les infos du store
	const { isConnected } = useSelector((state) => state.user);
	const navigate = useNavigate();

	useEffect(() => {
		if (isConnected) {
			navigate("/profile");
		}
	}, [isConnected, navigate]);

	return (
		<div className="flex flex-col h-full min-h-[100vh]">
			<Header />
			<main className="flex-grow w-full h-full flex items-center justify-center bg-blue px-4 md:px-11 lg:px-44">
				<SignInForm />
			</main>
			<Footer />
		</div>
	);
}
