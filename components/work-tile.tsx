import { Octicons } from "@expo/vector-icons";
import { cn } from "heroui-native";
import { Pressable, Text, View } from "react-native";

export function WorkTile({
	title,
	iconName = "issue-opened",
	iconColor = "#69cd67",
	infoContainerClassName,
	chevronIconColor = "#c4c4c6",
	count,
}: {
	title: string;
	iconName?: keyof typeof Octicons.glyphMap;
	iconColor?: string;
	infoContainerClassName?: string;
	chevronIconColor?: string;
	count?: number;
}) {
	return (
		<Pressable className="flex-row items-baseline gap-2.5 pl-4">
			<View
				style={{ backgroundColor: iconColor }}
				className="size-8 items-center justify-center rounded-md shrink-0"
			>
				<Octicons name={iconName} color="#fff" size={16} />
			</View>
			<View
				className={cn(
					"flex-row gap-2.5 items-center justify-between flex-1 border-b border-b-border pb-4 pr-4",
					infoContainerClassName,
				)}
			>
				<Text className="text-[17px] text-foreground">{title}</Text>
				<View className="flex-row items-center gap-x-2">
					{typeof count !== "undefined" ? (
						<Text className="text-[17px] text-surface-secondary-foreground">{count}</Text>
					) : null}
					<Octicons name="chevron-right" color={chevronIconColor} size={17} />
				</View>
			</View>
		</Pressable>
	);
}
