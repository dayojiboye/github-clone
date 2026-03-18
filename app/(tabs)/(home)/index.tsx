import AnimatedHeaderScreen from "@/components/animated-header-screen";
import { View } from "react-native";
import { Favorites } from "./components/favorites";
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
			<View className="gap-6">
				<MyWork />
				<Favorites />
			</View>
		</AnimatedHeaderScreen>
	);
}
