import { Center, Text } from "@chakra-ui/react";
import { useAuth } from "../libs/useAuth";

const Homepage = () => {
	const { isAuthenticated } = useAuth();

	return (
		<Center bg="trueGray.800" borderRadius={4}>
			{isAuthenticated ? <Text>You are authorized</Text> : <Text></Text>}
		</Center>
	);
};

export default Homepage;
