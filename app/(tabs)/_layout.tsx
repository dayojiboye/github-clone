import { TabBarScrollProvider } from "@/providers/tab-bar-scroll-provider";
import { Octicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

export default function TabLayout() {
	return (
		<TabBarScrollProvider>
			<Tabs
				screenOptions={{
					headerShown: false,
					tabBarStyle: { position: "absolute", borderTopWidth: 0, elevation: 0 },
					tabBarBackground: () => (
						<BlurView intensity={95} tint="systemMaterial" style={StyleSheet.absoluteFill} />
					),
				}}
			>
				<Tabs.Screen
					name="(home)"
					options={{
						title: "Home",
						tabBarIcon: ({ color, size }) => <Octicons size={size} name="home" color={color} />,
					}}
				/>
				<Tabs.Screen
					name="(inbox)"
					options={{
						title: "Inbox",
						tabBarIcon: ({ color, size }) => <Octicons size={size} name="inbox" color={color} />,
					}}
				/>
				<Tabs.Screen
					name="(explore)"
					options={{
						title: "Explore",
						tabBarIcon: ({ color, size }) => (
							<Octicons size={size} name="telescope" color={color} />
						),
					}}
				/>
				<Tabs.Screen
					name="(profile)"
					options={{
						title: "Profile",
						tabBarIcon: ({ color, size }) => <Octicons size={size} name="person" color={color} />,
					}}
				/>
			</Tabs>
		</TabBarScrollProvider>
	);
}
