import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Button,
	FlatList,
	useWindowDimensions,
	TouchableOpacity,
} from "react-native";

import { ThemeStyles, Theme } from "../styles/Theme";
import { CATEGORIES } from "../data/categories";

const CategoriesScreen = ({ navigation }) => {
	const window = useWindowDimensions();

	const styles = StyleSheet.create({
		category: {
			flex: 1,
			minHeight: 80,
			margin: 15,
			borderColor: Theme.primaryColor,
			borderWidth: 1,
			borderRadius: 5,
			padding: 10,
			width: window.width * 0.4,
		},
		text: {
			fontFamily: "OpenSansBold",
		},
	});

	const renderCategory = ({ index, item }) => {
		return (
			<TouchableOpacity
				onPress={() => {
					navigation.navigate({
						routeName: "CategoryMeals",
						params: {
							categoryId: item.categoryId,
						},
					});
				}}
			>
				<View style={styles.category}>
					<Text style={styles.text}>{item.name}</Text>
				</View>
			</TouchableOpacity>
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
