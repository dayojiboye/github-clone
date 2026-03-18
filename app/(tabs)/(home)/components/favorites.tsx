import { AppButton } from "@/components/ui/app-button";
import { Surface } from "heroui-native";
import { Text, View } from "react-native";
import { SectionHeader } from "./section-header";

export function Favorites() {
	return (
		<View className="gap-1.5">
			<SectionHeader title="Favorites" />
			<Surface className="rounded-[10px] px-4 gap-2 py-4 shadow-none">
				<Text className="text-center text-[17px] leading-tight">
					Add favorite repositories here to have quick access at any time, without having to search
				</Text>
				<AppButton variant="outline">Add Favorites</AppButton>
			</Surface>
		</View>
	);
}
