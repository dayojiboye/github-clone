import { Octicons } from "@expo/vector-icons";
import { Avatar, PressableFeedback } from "heroui-native";
import { Text, View } from "react-native";
import { Easing } from "react-native-reanimated";
import { useCSSVariable } from "uniwind";

interface RepositoryCardProps {
	name: string;
	starCount: number;
	description?: string;
	language: string;
	languageColor: string;
	userStarred?: boolean;
}

export function RepositoryCard({
	name,
	starCount,
	description,
	language,
	languageColor,
	userStarred = false,
}: RepositoryCardProps) {
	const iconColor = useCSSVariable("--color-icon") as string;

	return (
		<PressableFeedback
			animation={{
				scale: {
					value: 0.97,
					timingConfig: {
						easing: Easing.exp,
					},
				},
			}}
			className="w-[310px] h-[190px] bg-white rounded-sm p-4 gap-y-1.5"
		>
			<View className="flex-row gap-x-2 items-center">
				<Avatar alt="User avatar" className="size-7 border border-border">
					<Avatar.Fallback color="default">AJ</Avatar.Fallback>
					<Avatar.Image source={require("../assets/images/60001148.jpeg")} />
				</Avatar>
				<Text className="text-[#464751] text-base">dayojiboye</Text>
			</View>

			<Text className="font-semibold text-lg">{name}</Text>

			{description ? (
				<Text className="text-lg leading-tight line-clamp-3">{description}</Text>
			) : null}

			<View className="mt-auto flex-row items-center gap-x-4">
				<View className="flex-row items-center gap-x-1">
					<Octicons
						name={userStarred ? "star-fill" : "star"}
						size={16}
						color={userStarred ? "#f1c747" : iconColor}
					/>
					<Text className="text-base text-muted">{starCount}</Text>
				</View>

				<View className="flex-row items-center gap-x-1">
					<View className="size-3 rounded-full" style={{ backgroundColor: languageColor }} />
					<Text className="text-base text-muted">{language}</Text>
				</View>
			</View>
		</PressableFeedback>
	);
}
