import MainHeaderScreen from "@/components/main-header-screen";
import { Text, View } from "react-native";

export default function ExploreScreen() {
	return (
		<MainHeaderScreen title="Explore">
			<View className="flex-1">
				<Text>Explore Screen</Text>
			</View>
		</MainHeaderScreen>
	);
}
