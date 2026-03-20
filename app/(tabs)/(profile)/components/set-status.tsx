import { Octicons } from "@expo/vector-icons";
import { useThemeColor } from "heroui-native";
import { Pressable, Text, View } from "react-native";

export function SetStatus() {
	const mutedColor = useThemeColor("muted");

	return (
		<Pressable className="bg-[#F2F3F5] border-none rounded-xl flex-row justify-between gap-x-4 items-center p-4">
			<View className="flex-row items-center gap-x-2">
				<Octicons name="smiley" size={17} color={mutedColor} />
				<Text className="text-[17px] text-muted">Set your status</Text>
			</View>
			<Octicons name="pencil" size={17} color={mutedColor} />
		</Pressable>
	);
}
