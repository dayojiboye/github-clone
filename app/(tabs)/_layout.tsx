import { AnimatedTabBar } from "@/components/animated-tab-bar";
import { TabBarScrollProvider } from "@/providers/tab-bar-scroll-provider";
import { Octicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
	return (
		<TabBarScrollProvider>
			<Tabs tabBar={(props) => <AnimatedTabBar {...props} />}>
				<Tabs.Screen
					name="index"
					options={{
						title: "Home",
						tabBarIcon: ({ color, size }) => <Octicons size={size} name="home" color={color} />,
					}}
				/>
				<Tabs.Screen
					name="inbox"
					options={{
						title: "Inbox",
						tabBarIcon: ({ color, size }) => <Octicons size={size} name="inbox" color={color} />,
					}}
				/>
				<Tabs.Screen
					name="explore"
					options={{
						title: "Explore",
						tabBarIcon: ({ color, size }) => (
							<Octicons size={size} name="telescope" color={color} />
						),
					}}
				/>
				<Tabs.Screen
					name="profile"
					options={{
						title: "Profile",
						tabBarIcon: ({ color, size }) => <Octicons size={size} name="person" color={color} />,
					}}
				/>
			</Tabs>
		</TabBarScrollProvider>
	);
}
