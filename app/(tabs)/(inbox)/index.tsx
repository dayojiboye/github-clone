import AnimatedHeaderScreen from "@/components/animated-header-screen";
import { Text, View } from "react-native";

export default function InboxScreen() {
	return (
		<AnimatedHeaderScreen title="Inbox">
			<View className="flex-1">
				<Text>Inbox Screen</Text>
			</View>
		</AnimatedHeaderScreen>
	);
}
