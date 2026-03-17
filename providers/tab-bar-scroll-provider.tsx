import React, { createContext, useContext, useRef } from "react";
import { Animated } from "react-native";

type TabBarScrollContextType = {
	scrollY: Animated.Value;
};

const TabBarScrollContext = createContext<TabBarScrollContextType>({
	scrollY: new Animated.Value(0),
});

export function TabBarScrollProvider({ children }: { children: React.ReactNode }) {
	const scrollY = useRef(new Animated.Value(0)).current;
	return (
		<TabBarScrollContext.Provider value={{ scrollY }}>{children}</TabBarScrollContext.Provider>
	);
}

export function useTabBarScroll() {
	return useContext(TabBarScrollContext);
}
