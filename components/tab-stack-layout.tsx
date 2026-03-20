import { Stack } from "expo-router";
import { useThemeColor } from "heroui-native";
import { ComponentProps } from "react";
import { BlurEffectTypes } from "react-native-screens";

type TabStackLayoutProps = ComponentProps<typeof Stack>;

export default function TabStackLayout({ screenOptions, ...rest }: TabStackLayoutProps) {
	const foreground = useThemeColor("foreground");
	const accent = useThemeColor("accent");
	const background = useThemeColor("background");

	const defaultOptions = {
		headerLargeTitle: true,
		headerTransparent: true,
		headerBlurEffect: "regular" as BlurEffectTypes | undefined,
		headerLargeTitleShadowVisible: true,
		headerStyle: { backgroundColor: background },
		headerLargeTitleStyle: { color: foreground },
		headerTitleStyle: { color: foreground },
		headerTintColor: accent,
	};

	const mergedOptions =
		typeof screenOptions === "object" ? { ...defaultOptions, ...screenOptions } : defaultOptions;

	return <Stack screenOptions={mergedOptions} />;
}
