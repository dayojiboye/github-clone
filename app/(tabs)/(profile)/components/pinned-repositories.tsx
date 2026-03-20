import { RepositoryCard } from "@/components/repository-card";
import { Octicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";
import { useCSSVariable } from "uniwind";

export function PinnedRepositories() {
	const iconColor = useCSSVariable("--color-icon") as string;

	return (
		<View className="pt-8 gap-3 bg-background flex-1 pb-[100px]">
			<View className="flex-row items-center px-4 gap-x-3.5">
				<Octicons name="pin" size={18} color={iconColor} />
				<Text className="text-[17px] text-muted">Pinned</Text>
			</View>

			<ScrollView
				horizontal
				className="w-full"
				contentContainerClassName="px-4 gap-x-2"
				showsHorizontalScrollIndicator={false}
			>
				<RepositoryCard
					name="faq2pdf"
					starCount={0}
					language="TypeScript"
					languageColor="#3178c6"
				/>

				<RepositoryCard
					name="kickz"
					starCount={1}
					language="JavaScript"
					languageColor="#f1e05a"
					description="E-commerce app for footwears built with Next.js - integrated with Firebase and Paystack API."
				/>

				<RepositoryCard name="naruto_db" starCount={0} language="Dart" languageColor="#00B4AB" />

				<RepositoryCard
					name="coffee_delivery_app"
					starCount={1}
					language="TypeScript"
					languageColor="#3178c6"
					userStarred
				/>

				<RepositoryCard
					name="notes-node-api"
					starCount={0}
					language="TypeScript"
					languageColor="#3178c6"
					description="Just a simple notes app api in Node"
				/>
			</ScrollView>
		</View>
	);
}
