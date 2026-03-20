import { Octicons } from "@expo/vector-icons";
import { useScrollToTop } from "@react-navigation/native";
import { Stack } from "expo-router";
import { useThemeColor } from "heroui-native";
import React, { ReactNode, useRef } from "react";
import { Pressable, ScrollView, View } from "react-native";

type MainHeaderScreenProps = {
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

export default function MainHeaderScreen({
	title,
	children,
	onSearch,
	leftIcon,
	rightIcon,
}: MainHeaderScreenProps) {
	const accent = useThemeColor("accent");
	const foreground = useThemeColor("foreground");

	const scrollViewRef = useRef<ScrollView>(null);
	useScrollToTop(
		useRef({
			scrollToTop: () => scrollViewRef.current?.scrollTo({ y: 0, animated: true }),
		}),
	);

	return (
		<>
			<Stack.Screen
				options={{
					title: title ?? "",
					headerSearchBarOptions: {
						placeholder: "Search GitHub",
						tintColor: accent,
						textColor: foreground,
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
				ref={scrollViewRef}
				contentInsetAdjustmentBehavior="automatic"
				className="flex-1 bg-background"
				contentContainerClassName="pb-[100px] pt-2"
				scrollToOverflowEnabled
			>
				<View className="px-4">{children}</View>
			</ScrollView>
		</>
	);
}
