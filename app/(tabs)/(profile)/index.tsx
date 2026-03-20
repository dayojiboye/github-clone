import { IconSymbol } from "@/components/ui/icon-symbol.ios";
import { useHeaderHeight } from "@react-navigation/elements";
import { useScrollToTop } from "@react-navigation/native";
import { Image } from "expo-image";
import { Stack } from "expo-router";
import { useThemeColor } from "heroui-native";
import { useRef } from "react";
import { Pressable, Text, View } from "react-native";
import Animated, {
	interpolate,
	useAnimatedRef,
	useAnimatedStyle,
	useScrollOffset,
} from "react-native-reanimated";
import { withUniwind } from "uniwind";
import { GithubInfo } from "./components/github-info";
import { ProfileInfo } from "./components/profile-info";
import { SetStatus } from "./components/set-status";

const StyledImage = withUniwind(Image);

export default function ProfileScreen() {
	const scrollViewRef = useAnimatedRef<Animated.ScrollView>();
	const scroll = useScrollOffset(scrollViewRef);
	const accentColor = useThemeColor("accent");

	useScrollToTop(
		useRef({
			scrollToTop: () => scrollViewRef.current?.scrollTo({ y: 0, animated: true }),
		}),
	);

	const headerHeight = useHeaderHeight();

	const headerStyle = useAnimatedStyle(
		() => ({
			transform: [
				{ translateY: interpolate(scroll.value, [0, 100], [headerHeight + 20, 0], "clamp") },
			],
		}),
		[],
	);

	return (
		<Animated.ScrollView
			ref={scrollViewRef}
			className="flex-1 bg-[#FBFBFC]"
			contentContainerClassName="pb-[100px]"
			contentContainerStyle={{ paddingTop: headerHeight + 20 }}
			scrollToOverflowEnabled
		>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: "#FBFBFC" },
					headerBlurEffect: "regular",
					headerTitle: () => {
						return (
							<View style={{ overflow: "hidden", paddingBottom: 9, marginBottom: -9 }}>
								<Animated.View style={headerStyle}>
									<Text className="text-lg font-semibold">dayojiboye</Text>
								</Animated.View>
							</View>
						);
					},
					headerRight: () => {
						return (
							<View className="flex-row gap-x-5">
								<Pressable>
									<IconSymbol name="gearshape" color={accentColor} />
								</Pressable>
								<Pressable>
									<IconSymbol name="square.and.arrow.up" color={accentColor} />
								</Pressable>
							</View>
						);
					},
				}}
			/>
			<View className="flex-row items-center gap-x-4 px-4">
				<StyledImage
					alt="User avatar"
					source={require("../../../assets/images/60001148.jpeg")}
					className="rounded-full size-18 border border-border"
				/>
				<View>
					<Text className="font-bold text-[22px] leading-tight">Adedayo Jiboye</Text>
					<Text className="text-surface-secondary-foreground text-base leading-tight">
						dayojiboye
					</Text>
				</View>
			</View>
			<View className="mt-6 px-4 gap-4 pb-8">
				<SetStatus />
				<Text className="text-base">Senior Frontend Engineer</Text>
				<ProfileInfo />
			</View>
			<GithubInfo />
		</Animated.ScrollView>
	);
}
