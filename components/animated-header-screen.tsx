import { Octicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { useThemeColor } from "heroui-native";
import React, { ReactNode } from "react";
import { Pressable, ScrollView, View } from "react-native";

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
	const accent = useThemeColor("accent");
	const foreground = useThemeColor("foreground");
	const muted = useThemeColor("muted");

	return (
		<>
			<Stack.Screen
				options={{
					title: title ?? "",
					headerSearchBarOptions: {
						placeholder: "Search GitHub",
						tintColor: accent,
						textColor: foreground,
						headerIconColor: muted,
						hideWhenScrolling: true,
						onChangeText: (e) => onSearch?.(e.nativeEvent.text),
					},
					headerLeft: leftIcon
						? () => (
								<Pressable onPress={leftIcon.onPress}>
									<Octicons name={leftIcon.name} size={24} color={accent} />
								</Pressable>
							)
						: undefined,
					headerRight: rightIcon
						? () => (
								<Pressable onPress={rightIcon.onPress}>
									<Octicons name={rightIcon.name} size={24} color={accent} />
								</Pressable>
							)
						: undefined,
				}}
			/>

			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				className="flex-1 bg-background"
				contentContainerClassName="pb-[100px] pt-2"
			>
				<View className="px-4">{children}</View>
			</ScrollView>
		</>
	);
}
