import { Stack } from "expo-router";
import { useThemeColor } from "heroui-native";
import { ComponentProps } from "react";

type TabStackLayoutProps = ComponentProps<typeof Stack>;

export default function TabStackLayout({ screenOptions, ...rest }: TabStackLayoutProps) {
	const foreground = useThemeColor("foreground");
	const accent = useThemeColor("accent");
	const background = useThemeColor("background");

	return (
		<Stack
			{...rest}
			screenOptions={{
				headerLargeTitle: true,
				headerTransparent: true,
				headerBlurEffect: "regular",
				headerLargeTitleShadowVisible: true,
				headerStyle: { backgroundColor: background },
				headerLargeTitleStyle: { color: foreground },
				headerTitleStyle: { color: foreground },
				headerTintColor: accent,
				...(typeof screenOptions === "object" ? screenOptions : {}),
			}}
		/>
	);
}
