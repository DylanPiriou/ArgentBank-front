import FeaturesList from "../components/FeaturesList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../redux/slices/authSlice";
import { useEffect, useState } from "react";

export default function Home() {
	const dispatch = useDispatch();
	const token = useSelector((state) => state.auth.token);
	const user = useSelector((state) => state.auth.user);

  const [isConnected, setIsConnected] = useState(false);

	useEffect(() => {
		if (token) {
			dispatch(fetchUserProfile(token));
            setIsConnected(true);
		} else {
            setIsConnected(false);
    }
	}, [token, dispatch, isConnected]);

	return (
		<>
			<Header isConnected={isConnected} setIsConnected={setIsConnected} firstName={user?.firstName} />
			<Hero />
			<FeaturesList />
			<Footer />
		</>
	);
}
