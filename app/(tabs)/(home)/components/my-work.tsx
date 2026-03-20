import { WorkTile } from "@/components/work-tile";
import { Surface } from "heroui-native";
import { View } from "react-native";
import { SectionHeader } from "./section-header";

export function MyWork() {
	return (
		<View className="gap-2">
			<SectionHeader title="My Work" />
			<Surface className="rounded-[10px] px-0 gap-3.5 py-3 shadow-none">
				<WorkTile title="Issues" />
				<WorkTile title="Pull Requests" iconName="git-pull-request" iconColor="#4386f7" />
				<WorkTile title="Discussions" iconName="comment-discussion" iconColor="#6642b5" />
				<WorkTile title="Projects" iconName="table" iconColor="#787a84" />
				<WorkTile title="Top Repositories" iconName="repo" iconColor="#3f414b" />
				<WorkTile title="Organizations" iconName="organization" iconColor="#e68846" />
				<WorkTile
					title="Starred"
					iconName="star"
					iconColor="#f1c747"
					infoContainerClassName="border-b-0 pb-0"
				/>
			</Surface>
		</View>
	);
}
