import { Octicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { useCSSVariable } from "uniwind";

interface SectionHeaderProps {
	title: string;
	showMenuButton?: boolean;
}

export function SectionHeader({ title, showMenuButton = true }: SectionHeaderProps) {
	const iconColor = useCSSVariable("--color-icon") as string;

	return (
		<View className="flex-row justify-between gap-3 items-center">
			<Text className="text-[22px] font-semibold">{title}</Text>
			{showMenuButton ? (
				<Pressable>
					<Octicons name="kebab-horizontal" size={22} color={iconColor} />
				</Pressable>
			) : null}
		</View>
	);
}
