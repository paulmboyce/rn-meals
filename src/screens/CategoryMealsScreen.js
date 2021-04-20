import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CategoryMealsScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>This is the Category Meals Screen</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		font: OpenSans,
	},
});

export default CategoryMealsScreen;