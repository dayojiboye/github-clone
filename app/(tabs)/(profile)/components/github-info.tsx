import { WorkTile } from "@/components/work-tile";
import { View } from "react-native";

export function GithubInfo() {
	return (
		<View className="border-y border-y-border py-3 bg-[#FEFCFC] gap-3.5">
			<WorkTile
				title="Repositories"
				count={56}
				iconName="repo"
				iconColor="#3f414b"
				chevronIconColor="#9496A2"
			/>

			<WorkTile
				title="Starred"
				count={163}
				iconName="star"
				iconColor="#f1c747"
				chevronIconColor="#9496A2"
			/>

			<WorkTile
				title="Organizations"
				count={3}
				iconName="organization"
				iconColor="#e68846"
				chevronIconColor="#9496A2"
				infoContainerClassName="border-b-0 pb-0"
			/>
		</View>
	);
}
