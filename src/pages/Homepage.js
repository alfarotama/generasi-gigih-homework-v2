import { useAuth } from "../libs/useAuth";

const Homepage = () => {
	const { isAuthenticated } = useAuth();

	return isAuthenticated ? (
		<p>You already authorized</p>
	) : (
		<div
			style={{
				display: "grid",
				placeItems: "center",
				backgroundColor: "var(--dark-foreground-color)",
				borderRadius: 4,
			}}
		></div>
	);
};

export default Homepage;
