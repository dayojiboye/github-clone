import MainHeaderScreen from "@/components/main-header-screen";
import { Text, View } from "react-native";

export default function InboxScreen() {
	return (
		<MainHeaderScreen title="Inbox">
			<View className="flex-1">
				<Text>Inbox Screen</Text>
			</View>
		</MainHeaderScreen>
	);
}
