import { Octicons } from "@expo/vector-icons";
import { cn, Surface } from "heroui-native";
import { Pressable, Text, View } from "react-native";
import { SectionHeader } from "./section-header";

export function MyWork() {
	return (
		<View className="gap-1.5">
			<SectionHeader title="My Work" />
			<Surface className="rounded-[10px] px-0 gap-3.5 py-3 shadow-none">
				<WorkTile title="Issues" />
				<WorkTile title="Pull Requests" iconName="git-pull-request" iconColor="#4386f7" />
				<WorkTile title="Discussions" iconName="comment-discussion" iconColor="#6642b5" />
				<WorkTile title="Projects" iconName="table" iconColor="#787a84" />
				<WorkTile title="Top Repositories" iconName="repo" iconColor="#3f414b" />
				<WorkTile title="Organizations" iconName="organization" iconColor="#e68846" />
				<WorkTile title="Starred" iconName="star" iconColor="#f1c747" isLast />
			</Surface>
		</View>
	);
}

export function WorkTile({
	title,
	iconName = "issue-opened",
	iconColor = "#69cd67",
	isLast,
}: {
	title: string;
	iconName?: keyof typeof Octicons.glyphMap;
	iconColor?: string;
	isLast?: boolean;
}) {
	return (
		<Pressable className="flex-row items-baseline gap-2.5 pl-4 group">
			<View
				style={{ backgroundColor: iconColor }}
				className="size-8 items-center justify-center rounded-md shrink-0"
			>
				<Octicons name={iconName} color="#fff" size={16} />
			</View>
			<View
				className={cn(
					"flex-row gap-2.5 items-center justify-between flex-1 border-b border-b-border pb-4 pr-4",
					{ "border-b-0": isLast },
				)}
			>
				<Text className="text-base text-foreground">{title}</Text>
				<Octicons name="chevron-right" color={"#c4c4c6"} size={20} />
			</View>
		</Pressable>
	);
}
