import { Surface } from "heroui-native";
import { Text, View } from "react-native";
import { SectionHeader } from "./section-header";

export function Recent() {
	return (
		<View className="gap-2">
			<SectionHeader title="Recent" showMenuButton={false} />
			<Surface className="rounded-[10px] px-4 gap-2 py-4 shadow-none">
				<Text className="text-center text-[17px] leading-tight">
					Issues and Pull Requests that you&apos;ve interacted with recently will appear here
				</Text>
			</Surface>
		</View>
	);
}
