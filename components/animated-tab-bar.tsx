import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { cn } from "heroui-native";
import React, { useEffect } from "react";
import { Animated, Pressable, StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useThemeColors } from "../hooks/use-theme-colors";
import { useTabBarScroll } from "../providers/tab-bar-scroll-provider";

export function AnimatedTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
	const insets = useSafeAreaInsets();
	const { scrollY } = useTabBarScroll();
	const { background, surface, border, accent, muted } = useThemeColors();

	useEffect(() => {
		scrollY.setValue(0);
	}, [state.index]);

	const borderTopOpacity = scrollY.interpolate({
		inputRange: [0, 40],
		outputRange: [1, 0],
		extrapolate: "clamp",
	});

	const backgroundColor = scrollY.interpolate({
		inputRange: [0, 60],
		outputRange: [surface, background] as string[],
		extrapolate: "clamp",
	});

	return (
		<Animated.View
			style={[{ paddingBottom: insets.bottom, backgroundColor }]}
			className="flex-row pt-2"
		>
			<Animated.View
				className="absolute top-0 left-0 right-0"
				style={{
					height: StyleSheet.hairlineWidth,
					backgroundColor: border as string,
					opacity: borderTopOpacity,
				}}
			/>

			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true,
					});
					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name);
					}
				};

				return (
					<Pressable
						key={route.key}
						onPress={onPress}
						className="flex-1 items-center justify-center py-1 gap-1"
					>
						{options.tabBarIcon?.({
							focused: isFocused,
							color: isFocused ? accent : muted,
							size: 24,
						})}
						<Text className={cn("text-muted text-xs font-medium", { "text-accent": isFocused })}>
							{options.title}
						</Text>
					</Pressable>
				);
			})}
		</Animated.View>
	);
}
