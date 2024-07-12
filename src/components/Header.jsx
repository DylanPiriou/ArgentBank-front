import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";
import { toast } from "sonner";

export default function Header({ isConnected, setIsConnected, firstName }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
		navigate("/login");
		toast.success("Vous êtes déconnecté");
	};

	return (
		<header className="w-full flex max-sm:flex-col items-center justify-between py-4 px-4 md:px-9 mg:px-44">
			<Link to="/" className="w-[200px]">
				<img src="/src/assets/argentBankLogo.png" alt="ArgentBank" />
			</Link>

			{isConnected ? (
				<div className="w-fit flex gap-5">
					<Link to="/user" className="flex items-center justify-center">
						<img src="/src/assets/icon-user.svg" alt="logo utilisateur" />
						<p className="font-bold">{firstName}</p>
					</Link>
					<div
						className="flex items-center justify-center cursor-pointer"
						onClick={() => handleLogout()}
					>
						<img src="/src/assets/logout.svg" alt="logo utilisateur" />
						<p className="font-bold"> Sign Out </p>
					</div>
				</div>
			) : (
				<Link to="/login" className="flex items-center justify-center gap-1">
					<img src="/src/assets/icon-user.svg" alt="logo utilisateur" />
					<p className="font-bold"> Sign In </p>
				</Link>
			)}

		</header>
	);
}
