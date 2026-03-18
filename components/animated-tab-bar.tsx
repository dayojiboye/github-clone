import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { cn } from "heroui-native";
import React, { useEffect } from "react";
import { Animated, Pressable, StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useThemeColors } from "../hooks/use-theme-colors";
import { useTabBarScroll } from "../providers/tab-bar-scroll-provider";

export function AnimatedTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
	const insets = useSafeAreaInsets();
	const { scrollY } = useTabBarScroll();
	const { border, accent, muted } = useThemeColors();

	// Reset scroll on tab change
	useEffect(() => {
		scrollY.setValue(0);
	}, [state.index]);

	// Border fades out as user scrolls down (content blends with tab bar)
	const borderTopOpacity = scrollY.interpolate({
		inputRange: [0, 60],
		outputRange: [1, 0],
		extrapolate: "clamp",
	});

	// Blur intensity: light at top, stronger as content scrolls under
	const blurIntensity = scrollY.interpolate({
		inputRange: [0, 60],
		outputRange: [60, 95],
		extrapolate: "clamp",
	});

	return (
		<Animated.View style={[styles.container, { paddingBottom: insets.bottom }]}>
			{/* Blur background */}
			<AnimatedBlurView
				intensity={blurIntensity}
				tint="systemMaterial"
				style={StyleSheet.absoluteFill}
			/>

			{/* Border top fades out on scroll */}
			<Animated.View
				style={[
					styles.border,
					{
						backgroundColor: border as string,
						opacity: borderTopOpacity,
					},
				]}
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
					<Pressable key={route.key} onPress={onPress} style={styles.tab}>
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

// Wrap BlurView to make intensity animatable
const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		paddingTop: 8,
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
	},
	border: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		height: StyleSheet.hairlineWidth,
	},
	tab: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 4,
		gap: 4,
	},
});
