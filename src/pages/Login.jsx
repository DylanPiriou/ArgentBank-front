import Footer from "../components/Footer";
import Header from "../components/Header";
import SignInForm from "../components/SignInForm";


export default function Login() {
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
