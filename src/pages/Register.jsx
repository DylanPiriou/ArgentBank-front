import Footer from "../components/Footer";
import Header from "../components/Header";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
	return (
		<div className="flex flex-col h-full min-h-[100vh]">
			<Header />
			<main className="flex-grow w-full h-full flex items-center justify-center bg-blue px-4 md:px-11 lg:px-44">
				<RegisterForm />
			</main>
			<Footer />
		</div>
	);
}
