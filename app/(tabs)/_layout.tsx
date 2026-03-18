import { Octicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarStyle: { position: "absolute" },
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
					tabBarIcon: ({ color, size }) => <Octicons size={22} name="person" color={color} />,
				}}
			/>
		</Tabs>
	);
}
