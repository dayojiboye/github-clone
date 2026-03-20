import { Octicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { Tabs } from "expo-router";
import { cn, useThemeColor } from "heroui-native";
import React from "react";
import { StyleSheet } from "react-native";
import { withUniwind } from "uniwind";

const StyledUserAvatar = withUniwind(Image);

export default function TabLayout() {
	const accentColor = useThemeColor("accent");

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarStyle: { position: "absolute" },
				tabBarLabelStyle: { marginTop: 3, fontWeight: "500" },
				tabBarActiveTintColor: accentColor,
				tabBarBackground: () => (
					<BlurView intensity={95} tint="regular" style={StyleSheet.absoluteFill} />
				),
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					href: null,
				}}
			/>
			<Tabs.Screen
				name="(home)"
				options={{
					title: "Home",
					tabBarIcon: ({ color, size }) => <Octicons size={22} name="home" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="(inbox)"
				options={{
					title: "Inbox",
					tabBarIcon: ({ color, size }) => <Octicons size={22} name="inbox" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="(explore)"
				options={{
					title: "Explore",
					tabBarIcon: ({ color, size }) => <Octicons size={22} name="telescope" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="(profile)"
				options={{
					title: "Profile",
					tabBarIcon: ({ color, size, focused }) => (
						<StyledUserAvatar
							alt="User avatar"
							source={require("../../assets/images/60001148.jpeg")}
							className={cn("size-7 rounded-full", {
								"border-[1.5px] border-accent": focused,
							})}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
