import AnimatedHeaderScreen from "@/components/animated-header-screen";
import { View } from "react-native";
import { Favorites } from "./components/favorites";
import { MyWork } from "./components/my-work";
import { Recent } from "./components/recent";
import { Shortcuts } from "./components/shortcuts";

export default function HomeScreen() {
	return (
		<AnimatedHeaderScreen
			title="Home"
			rightIcon={{
				name: "plus",
				onPress: () => {},
			}}
		>
			<View className="gap-8">
				<MyWork />
				<Favorites />
				<Shortcuts />
				<Recent />
			</View>
		</AnimatedHeaderScreen>
	);
}
