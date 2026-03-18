import AnimatedHeaderScreen from "@/components/animated-header-screen";
import { View } from "react-native";
import { MyWork } from "./components/my-work";

export default function HomeScreen() {
	return (
		<AnimatedHeaderScreen
			title="Home"
			rightIcon={{
				name: "plus",
				onPress: () => {},
			}}
		>
			<View className="mt-6 gap-6">
				<MyWork />
			</View>
		</AnimatedHeaderScreen>
	);
}
