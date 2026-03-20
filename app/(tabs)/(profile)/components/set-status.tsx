import { Octicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

export function SetStatus() {
	return (
		<Pressable className="mt-6 bg-[#F2F3F5] border-none rounded-xl flex-row justify-between gap-x-4 items-center p-4">
			<View className="flex-row items-center gap-x-2.5">
				<Octicons name="smiley" size={17} color="#60626B" />
				<Text className="text-[17px] text-[#60626B]">Set your status</Text>
			</View>
			<Octicons name="pencil" size={17} color="#60626B" />
		</Pressable>
	);
}
