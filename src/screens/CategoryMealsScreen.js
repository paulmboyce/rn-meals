import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoryMealsScreen = ({ navigation }) => {
	return (
		<View style={styles.screen}>
			<Text style={styles.text}>This is the Category Meals Screen</Text>
			<Button
				title="View Meal Details"
				onPress={() => navigation.navigate({ routeName: "MealDetail" })}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontFamily: "OpenSans",
	},
});

export default CategoryMealsScreen;
