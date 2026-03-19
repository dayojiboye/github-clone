import { AppButton } from "@/components/ui/app-button";
import { Octicons } from "@expo/vector-icons";
import { Avatar, cn, Surface } from "heroui-native";
import { Text, View } from "react-native";
import { SectionHeader } from "./section-header";

export function Shortcuts() {
	return (
		<View className="gap-2">
			<SectionHeader title="Shortcuts" />
			<Surface className="rounded-[10px] px-4 gap-2 py-4 shadow-none">
				<View className="flex-row justify-center">
					<ShortcutAvatar className="ml-0" />
					<ShortcutAvatar backgroundColor="#eaf4ec" iconName="issue-opened" iconColor="#498849" />
					<ShortcutAvatar
						backgroundColor="#E8EFF8"
						iconName="git-pull-request"
						iconColor="#1757BE"
					/>
					<ShortcutAvatar
						backgroundColor="#EEECF4"
						iconName="comment-discussion"
						iconColor="#4C1C9B"
					/>
					<ShortcutAvatar backgroundColor="#F6EEEA" iconName="organization" iconColor="#D57131" />
					<ShortcutAvatar
						backgroundColor="#F4EAEC"
						iconName="people"
						iconColor="#BD3A3D"
						iconSize={18}
					/>
					<ShortcutAvatar backgroundColor="#EEECF4" iconName="briefcase" iconColor="#5B389F" />
					<ShortcutAvatar iconName="file-diff" />
				</View>
				<Text className="text-center text-[17px] leading-tight font-semibold">
					The things you need, one tap away
				</Text>
				<Text className="text-center text-[17px] leading-tight">
					Fast access to your lists of Issues, Pull Requests, or Discussions.
				</Text>
				<AppButton variant="outline">Get Started</AppButton>
			</Surface>
		</View>
	);
}

function ShortcutAvatar({
	iconName = "zap",
	iconColor = "#555862",
	backgroundColor = "#eff0f2",
	className,
	iconSize = 16,
}: {
	iconName?: keyof typeof Octicons.glyphMap;
	iconColor?: string;
	backgroundColor?: string;
	className?: string;
	iconSize?: number;
}) {
	return (
		<Avatar
			alt={iconName}
			className={cn("size-9 border-[1.5px] border-white shrink-0 -ml-1.5", className)}
		>
			<Avatar.Fallback style={{ backgroundColor }}>
				<Octicons name={iconName} size={iconSize} color={iconColor} />
			</Avatar.Fallback>
		</Avatar>
	);
}
