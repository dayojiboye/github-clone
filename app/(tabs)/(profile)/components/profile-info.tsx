import { Octicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import Icon from "react-native-remix-icon";
import { useCSSVariable } from "uniwind";

export function ProfileInfo() {
	const iconColor = useCSSVariable("--color-icon") as string;

	return (
		<View className="gap-y-1">
			<View className="flex-row items-center gap-2">
				<Octicons name="location" size={17} color={iconColor} />
				<Text className="text-muted text-base">Lagos, Nigeria</Text>
			</View>
			<View className="flex-row items-center gap-1.5">
				<Icon name="linkedin-box-fill" size={20} color={iconColor} />
				<Text className="text-base font-semibold">in/adedayo-jiboye-661632146</Text>
			</View>
			<View className="flex-row items-center gap-1.5">
				<Octicons name="people" size={17} color={iconColor} />
				<Text className="text-muted text-base">
					<Text className="text-foreground font-semibold">26</Text> followers
				</Text>
				<View className="size-0.5 rounded-full bg-muted" />
				<Text className="text-muted text-base">
					<Text className="text-foreground font-semibold">32</Text> following
				</Text>
			</View>
		</View>
	);
}
