import { Octicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import React, { ReactNode } from "react";
import { Animated, Pressable, ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useThemeColors } from "../hooks/use-theme-colors";
import { useTabBarScroll } from "../providers/tab-bar-scroll-provider";

type AnimatedHeaderScreenProps = {
	children: ReactNode;
	title?: string;
	leftIcon?: {
		name: keyof typeof Octicons.glyphMap;
		onPress: () => void;
	};
	rightIcon?: {
		name: keyof typeof Octicons.glyphMap;
		onPress: () => void;
	};
};

export default function AnimatedHeaderScreen({
	title,
	children,
	leftIcon,
	rightIcon,
}: AnimatedHeaderScreenProps) {
	const { scrollY } = useTabBarScroll();
	const insets = useSafeAreaInsets();
	const { background, surface, border, accent, foreground } = useThemeColors();

	const handleScroll = Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
		useNativeDriver: false,
	});

	const headerBackgroundColor = scrollY.interpolate({
		inputRange: [0, 40],
		outputRange: [background, surface] as string[],
		extrapolate: "clamp",
	});

	const headerBorderOpacity = scrollY.interpolate({
		inputRange: [30, 40],
		outputRange: [0, 1],
		extrapolate: "clamp",
	});

	const headerTitleOpacity = scrollY.interpolate({
		inputRange: [30, 40],
		outputRange: [0, 1],
		extrapolate: "clamp",
	});

	const headerTitleTranslateY = scrollY.interpolate({
		inputRange: [30, 40],
		outputRange: [8, 0],
		extrapolate: "clamp",
	});

	const largeTitleOpacity = scrollY.interpolate({
		inputRange: [0, 40],
		outputRange: [1, 0],
		extrapolate: "clamp",
	});

	const largeTitleTranslateY = scrollY.interpolate({
		inputRange: [0, 40],
		outputRange: [0, -8],
		extrapolate: "clamp",
	});

	return (
		<>
			<Stack.Screen
				options={{
					headerShown: true,
					headerTitleAlign: "center",
					headerTitle: () => (
						<Animated.Text
							style={{
								color: foreground,
								fontSize: 18,
								fontWeight: "600",
								opacity: headerTitleOpacity,
								transform: [{ translateY: headerTitleTranslateY }],
							}}
						>
							{title}
						</Animated.Text>
					),
					headerLeft: leftIcon
						? () => (
								<Pressable onPress={leftIcon.onPress} className="ml-4">
									<Octicons name={leftIcon.name} size={24} color={accent} />
								</Pressable>
							)
						: undefined,
					headerRight: rightIcon
						? () => (
								<Pressable onPress={rightIcon.onPress} className="mr-4">
									<Octicons name={rightIcon.name} size={24} color={accent} />
								</Pressable>
							)
						: undefined,
					headerBackground: () => (
						<Animated.View
							style={[StyleSheet.absoluteFill, { backgroundColor: headerBackgroundColor }]}
						>
							<Animated.View
								className="absolute bottom-0 left-0 right-0"
								style={{
									height: StyleSheet.hairlineWidth,
									backgroundColor: border as string,
									opacity: headerBorderOpacity,
								}}
							/>
						</Animated.View>
					),
				}}
			/>

			<ScrollView
				className="flex-1 bg-background"
				contentContainerClassName="grow"
				contentInsetAdjustmentBehavior="automatic"
				onScroll={handleScroll}
				scrollEventThrottle={16}
			>
				{title && (
					<Animated.Text
						className="text-foreground text-4xl font-bold px-4 pt-2 pb-3"
						style={{
							opacity: largeTitleOpacity,
							transform: [{ translateY: largeTitleTranslateY }],
						}}
					>
						{title}
					</Animated.Text>
				)}

				<View className="flex-1 px-4">{children}</View>
			</ScrollView>
		</>
	);
}
