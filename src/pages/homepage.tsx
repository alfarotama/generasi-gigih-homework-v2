import { Center, Text } from "@chakra-ui/react";
import { useAuth } from "../libs/useAuth";

const Homepage = () => {
	const { isAuthenticated } = useAuth();

	return (
		<Center bg="trueGray.800" borderRadius={4}>
			{isAuthenticated ? (
				<Text>You Already Login !</Text>
			) : (
				<Text>You Can Login By clicking The Login Button</Text>
			)}
		</Center>
	);
};

export default Homepage;
