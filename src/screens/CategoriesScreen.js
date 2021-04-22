import React from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	useWindowDimensions,
	TouchableOpacity,
	TouchableNativeFeedback,
	Platform,
} from "react-native";

import { ThemeStyles, Theme } from "../styles/Theme";
import { CATEGORIES } from "../data/categories";

const CategoriesScreen = ({ navigation }) => {
	const window = useWindowDimensions();

	let Touchable = TouchableOpacity;
	if (Platform.OS === "android" && Platform.Version >= 21) {
		Touchable = TouchableNativeFeedback;
	}

	const styles = StyleSheet.create({
		category: {
			flex: 1,
			margin: 12,
			backgroundColor: Theme.backgroundColor,
			borderWidth: 1,
			borderRadius: 10,
			padding: 15,
			minHeight: window.width * 0.35,
			width: window.width * 0.4,
			justifyContent: "flex-end",
			alignItems: "flex-end",
			shadowColor: "black",
			shadowRadius: 10,
			shadowOpacity: 0.26,
			shadowOffset: { width: 0, height: 2 },
			elevation: 3,
			overflow: "hidden",
		},
		textRight: {
			fontFamily: "OpenSansBold",
			textAlign: "right",
			fontSize: window.height < 600 ? 15 : 19,
		},
	});

	const renderCategory = ({ index, item }) => {
		return (
			<View style={{ overflow: "hidden", borderRadius: 10 }}>
				<Touchable
					style={{ flex: 1 }}
					onPress={() => {
						navigation.navigate({
							routeName: "CategoryMeals",
							params: {
								categoryId: item.categoryId,
							},
						});
					}}
				>
					<View
						style={{
							...styles.category,
							backgroundColor: item.color,
							borderColor: item.color,
						}}
					>
						<Text style={styles.textRight}>{item.name}</Text>
					</View>
				</Touchable>
			</View>
		);
	};

	return (
		<View style={ThemeStyles.screen}>
			<FlatList
				data={CATEGORIES}
				renderItem={renderCategory}
				keyExtractor={(item) => item.id}
				numColumns={2}
			/>
		</View>
	);
};

CategoriesScreen.navigationOptions = {
	title: "Meals App: Categories",
};
export default CategoriesScreen;
