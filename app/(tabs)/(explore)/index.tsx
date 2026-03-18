import AnimatedHeaderScreen from "@/components/animated-header-screen";
import { Text, View } from "react-native";

export default function ExploreScreen() {
	return (
		<AnimatedHeaderScreen title="Explore">
			<View className="flex-1">
				<Text>Explore Screen</Text>
			</View>
		</AnimatedHeaderScreen>
	);
}
