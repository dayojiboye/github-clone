import { Octicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import React, { ReactNode } from "react";
import { Pressable, ScrollView, View } from "react-native";
import { useThemeColors } from "../hooks/use-theme-colors";

type AnimatedHeaderScreenProps = {
	children: ReactNode;
	title?: string;
	onSearch?: (text: string) => void;
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
	onSearch,
	leftIcon,
	rightIcon,
}: AnimatedHeaderScreenProps) {
	const { background, accent, foreground, muted } = useThemeColors();

	return (
		<>
			<Stack.Screen
				options={{
					title: title ?? "",
					headerSearchBarOptions: {
						placeholder: "Search",
						tintColor: accent,
						textColor: foreground,
						headerIconColor: muted,
						hideWhenScrolling: true,
						onChangeText: (e) => onSearch?.(e.nativeEvent.text),
					},
					headerLeft: leftIcon
						? () => (
								<Pressable onPress={leftIcon.onPress} style={{ marginLeft: 4 }}>
									<Octicons name={leftIcon.name} size={24} color={accent} />
								</Pressable>
							)
						: undefined,
					headerRight: rightIcon
						? () => (
								<Pressable onPress={rightIcon.onPress} style={{ marginRight: 4 }}>
									<Octicons name={rightIcon.name} size={24} color={accent} />
								</Pressable>
							)
						: undefined,
				}}
			/>

			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={{ flex: 1, backgroundColor: background }}
				contentContainerStyle={{ paddingBottom: 200 }}
			>
				<View style={{ paddingHorizontal: 16 }}>{children}</View>
			</ScrollView>
		</>
	);
}
