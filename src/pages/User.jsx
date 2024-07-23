import Header from "../components/Header";
import Footer from "../components/Footer";
import AccountIem from "../components/AccountItem";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { fetchUser, updateUser } from "../redux/actions/userActions";

export default function User() {

	// Récupération des données du store
	const { user, token, isConnected } = useSelector((state) => state.user);
	const navigate = useNavigate();

	useEffect(() => {
		if (!isConnected) {
			navigate("/login");
		}
	}, [isConnected, navigate]);

	const dispatch = useDispatch();
	const [isEdit, setIsEdit] = useState(false);
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [newFirstName, setNewFirstName] = useState();
	const [newLastName, setNewLastName] = useState();

	useEffect(() => {
		if (token) {
			dispatch(fetchUser());
		}
	}, [dispatch, token]);

	useEffect(() => {
		if (user) {
			setFirstName(user.firstName);
			setLastName(user.lastName);
		}
	}, [user]);

	const handleFirstNameChange = (e) => {
		setNewFirstName(e.target.value);
	};

	const handleLastNameChange = (e) => {
		setNewLastName(e.target.value);
	};

	const handleSave = () => {

		// Vérifier si il y a des changements
		const updatedInfo = {
			firstName: newFirstName ? newFirstName : firstName,
			lastName: newLastName ? newLastName : lastName,
		};

		// Mettre à jour les infos dans le store
		dispatch(updateUser(token, updatedInfo));

		// Vérifier si les informations ont été modifiées
		if (
			(!newFirstName || newFirstName === firstName) &&
			(!newLastName || newLastName === lastName)
		) {
			toast.info("Échec de la mise à jour. Aucune modification détectée.");
			return;
		}

		// Changer les infos utilisateurs seulement si elles ont été modifiées
		if (newFirstName && newFirstName !== firstName) {
			setFirstName(newFirstName);
		}
		if (newLastName && newLastName !== lastName) {
			setLastName(newLastName);
		}

		// Fermer le mode édition
		setIsEdit(false);
		toast.success("Informations mises à jour avec succès !");
	};

	return (
		<div className="flex flex-col h-full min-h-[100vh]">
			<Header isConnected={isConnected} firstName={firstName} />

			<main className="flex-grow w-full h-full flex flex-col items-center justify-center gap-4 bg-blue py-12 px-4 md:px-11 lg:px-44">
				{isEdit ? (
					<div className="flex flex-col">
						<h2 className="text-3xl text-white font-bold text-center">
							Welcome back
						</h2>
						<br />
						<div className="grid grid-cols-2 gap-2 w-full max-w-[350px]">
							<input
								type="text"
								className="p-2"
								value={newFirstName ? newFirstName : firstName}
								onChange={handleFirstNameChange}
							/>
							<input
								type="text"
								className="p-2"
								value={newLastName ? newLastName : lastName}
								onChange={handleLastNameChange}
							/>
							<button
								className="p-2 bg-primary text-white hover:bg-secondary transition duration-300"
								onClick={handleSave}
							>
								Save
							</button>
							<button
								className="p-2 bg-primary text-white hover:bg-red-500 transition duration-300"
								onClick={() => setIsEdit(false)}
							>
								Cancel
							</button>
						</div>
					</div>
				) : (
					<h2 className="text-3xl text-white font-bold text-center">
						Welcome back
						<br />
						{firstName} {lastName} !
					</h2>
				)}
				{!isEdit && (
					<Button text="Edit Name" fit action={() => setIsEdit(!isEdit)} />
				)}
				<br />
				<AccountIem name="Argent Bank Checking (x8349)" amount="$2,082.79" />
				<AccountIem name="Argent Bank Savings (x6712)" amount="$10,928.42" />
				<AccountIem name="Argent Bank Credit Card (x8349)" amount="$184.30" />
			</main>
			<Footer />
		</div>
	);
}
