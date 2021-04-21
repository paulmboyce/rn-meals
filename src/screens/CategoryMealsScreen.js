import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { ThemeStyles } from "../styles/Theme";
import getNavigationOptions from "../navigation/NavigationOptions";

const CategoryMealsScreen = ({ navigation }) => {
	return (
		<View style={ThemeStyles.screen}>
			<Button
				title="View Meal Details"
				onPress={() => navigation.navigate({ routeName: "MealDetail" })}
			/>
			<Button title="Go Back" onPress={() => navigation.goBack()} />
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontFamily: "OpenSans",
	},
});

CategoryMealsScreen.navigationOptions = {
	...getNavigationOptions(),
	title: "Meal Categories",
};

export default CategoryMealsScreen;
