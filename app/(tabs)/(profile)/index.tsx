import AnimatedHeaderScreen from "@/components/animated-header-screen";
import { Text, View } from "react-native";

export default function ProfileScreen() {
	return (
		<AnimatedHeaderScreen title="Profile">
			<View className="flex-1">
				<Text>Profile Screen</Text>
			</View>
		</AnimatedHeaderScreen>
	);
}
