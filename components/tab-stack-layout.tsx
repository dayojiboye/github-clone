import { useThemeColors } from "@/hooks/use-theme-colors";
import { Stack } from "expo-router";
import { ComponentProps } from "react";

type TabStackLayoutProps = ComponentProps<typeof Stack>;

export default function TabStackLayout({ screenOptions, ...rest }: TabStackLayoutProps) {
	const { foreground, accent } = useThemeColors();

	return (
		<Stack
			{...rest}
			screenOptions={{
				headerLargeTitle: true,
				headerTransparent: true,
				headerBlurEffect: "regular",
				headerLargeTitleShadowVisible: true,
				// headerStyle: { backgroundColor: background },
				headerLargeTitleStyle: { color: foreground },
				headerTitleStyle: { color: foreground },
				headerTintColor: accent,
				...(typeof screenOptions === "object" ? screenOptions : {}),
			}}
		/>
	);
}
