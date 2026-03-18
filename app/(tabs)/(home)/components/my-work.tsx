import { Octicons } from "@expo/vector-icons";
import { Surface } from "heroui-native";
import { Pressable, Text, View } from "react-native";
import { SectionHeader } from "./section-header";

export function MyWork() {
	return (
		<View className="gap-1.5">
			<SectionHeader title="My Work" />

			<Surface className="rounded-[10px] px-0 gap-3.5 py-3">
				<Pressable className="flex-row items-baseline gap-2.5 pl-4">
					<View className="size-8 items-center justify-center bg-[#69cd67] rounded-md shrink-0">
						<Octicons name="issue-opened" color="#fff" size={16} />
					</View>
					<View className="flex-row gap-2.5 items-center justify-between flex-1 border-b border-b-[#ebebec] pb-4 pr-4">
						<Text className="text-base text-foreground">Issues</Text>
						<Octicons name="chevron-right" color={"#c4c4c6"} size={20} />
					</View>
				</Pressable>

				<Pressable className="flex-row items-baseline gap-2.5 pl-4">
					<View className="size-8 items-center justify-center bg-[#4386f7] rounded-md shrink-0">
						<Octicons name="git-pull-request" color="#fff" size={16} />
					</View>
					<View className="flex-row gap-2.5 items-center justify-between flex-1 border-b border-b-[#ebebec] pb-4 pr-4">
						<Text className="text-base text-foreground">Pull Requests</Text>
						<Octicons name="chevron-right" color={"#c4c4c6"} size={20} />
					</View>
				</Pressable>

				<Pressable className="flex-row items-baseline gap-2.5 pl-4">
					<View className="size-8 items-center justify-center bg-[#6642b5] rounded-md shrink-0">
						<Octicons name="comment-discussion" color="#fff" size={16} />
					</View>
					<View className="flex-row gap-2.5 items-center justify-between flex-1 border-b border-b-[#ebebec] pb-4 pr-4">
						<Text className="text-base text-foreground">Discussions</Text>
						<Octicons name="chevron-right" color={"#c4c4c6"} size={20} />
					</View>
				</Pressable>

				<Pressable className="flex-row items-baseline gap-2.5 pl-4">
					<View className="size-8 items-center justify-center bg-[#787a84] rounded-md shrink-0">
						<Octicons name="table" color="#fff" size={16} />
					</View>
					<View className="flex-row gap-2.5 items-center justify-between flex-1 border-b border-b-[#ebebec] pb-4 pr-4">
						<Text className="text-base text-foreground">Projects</Text>
						<Octicons name="chevron-right" color={"#c4c4c6"} size={20} />
					</View>
				</Pressable>

				<Pressable className="flex-row items-baseline gap-2.5 pl-4">
					<View className="size-8 items-center justify-center bg-[#3f414b] rounded-md shrink-0">
						<Octicons name="repo" color="#fff" size={16} />
					</View>
					<View className="flex-row gap-2.5 items-center justify-between flex-1 border-b border-b-[#ebebec] pb-4 pr-4">
						<Text className="text-base text-foreground">Top Repositories</Text>
						<Octicons name="chevron-right" color={"#c4c4c6"} size={20} />
					</View>
				</Pressable>

				<Pressable className="flex-row items-baseline gap-2.5 pl-4">
					<View className="size-8 items-center justify-center bg-[#e68846] rounded-md shrink-0">
						<Octicons name="organization" color="#fff" size={16} />
					</View>
					<View className="flex-row gap-2.5 items-center justify-between flex-1 border-b border-b-[#ebebec] pb-4 pr-4">
						<Text className="text-base text-foreground">Organizations</Text>
						<Octicons name="chevron-right" color={"#c4c4c6"} size={20} />
					</View>
				</Pressable>

				<Pressable className="flex-row items-baseline gap-2.5 pl-4">
					<View className="size-8 items-center justify-center bg-[#f1c747] rounded-md shrink-0">
						<Octicons name="star" color="#fff" size={16} />
					</View>
					<View className="flex-row gap-2.5 items-center justify-between flex-1 pb-0 pr-4">
						<Text className="text-base text-foreground">Starred</Text>
						<Octicons name="chevron-right" color={"#c4c4c6"} size={20} />
					</View>
				</Pressable>
			</Surface>
		</View>
	);
}
