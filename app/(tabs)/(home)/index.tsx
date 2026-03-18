import AnimatedHeaderScreen from "@/components/animated-header-screen";
import { useThemeColors } from "@/hooks/use-theme-colors";
import { useState } from "react";
import { Text, View } from "react-native";

export default function HomeScreen() {
	const [searchValue, setSearchValue] = useState("");
	const { muted, border } = useThemeColors();

	return (
		<AnimatedHeaderScreen
			title="Home"
			rightIcon={{
				name: "plus",
				onPress: () => {},
			}}
		>
			{Array.from({ length: 100 }, (_, i) => i + 1).map((i) => (
				<View
					key={i}
					className="flex-row items-center justify-center h-10 border-b border-b-border"
				>
					<Text>{i}</Text>
				</View>
			))}
			{/* <SearchField value={searchValue} onChange={setSearchValue}>
				<SearchField.Group>
					<SearchField.SearchIcon>
						<Octicons name="search" size={18} color={muted} />
					</SearchField.SearchIcon>
					<SearchField.Input
						placeholder="Search GitHub"
						className="pl-9 py-2 rounded-[10px] bg-surface-tertiary border-surface-tertiary text-base leading-0"
						style={{ boxShadow: "none", borderWidth: 0 }}
					/>
					<SearchField.ClearButton />
				</SearchField.Group>
			</SearchField>

			<View className="mt-6 gap-6">
				<View className="gap-1.5">
					<View className="flex-row justify-between gap-3 items-center">
						<Text className="text-xl font-semibold">My Work</Text>
						<Pressable className="">
							<Octicons name="kebab-horizontal" size={24} color={muted} />
						</Pressable>
					</View>

					<Surface className="shadow-none rounded-[10px] px-0">
						<Pressable className="flex-row items-center gap-2.5 pb-3 px-4">
							<View className="size-8 items-center justify-center bg-[#54d961] rounded-md shrink-0">
								<Octicons name="issue-opened" color="white" size={16} />
							</View>
							<View className="flex-row gap-2.5 items-center justify-between flex-1">
								<Text className="text-base font-medium text-foreground">Issues</Text>
								<Octicons name="chevron-right" color={muted} size={20} />
							</View>
						</Pressable>
						<Separator orientation="horizontal" className="ml-[42px]" />
					</Surface>
				</View>
			</View> */}
		</AnimatedHeaderScreen>
	);
}
