import { Octicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

interface SectionHeaderProps {
	title: string;
	showMenuButton?: boolean;
}

export function SectionHeader({ title, showMenuButton = true }: SectionHeaderProps) {
	return (
		<View className="flex-row justify-between gap-3 items-center">
			<Text className="text-[22px] font-semibold">{title}</Text>
			{showMenuButton && (
				<Pressable>
					<Octicons name="kebab-horizontal" size={22} color={"#9295a0"} />
				</Pressable>
			)}
		</View>
	);
}
