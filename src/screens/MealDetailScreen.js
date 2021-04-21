import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { ThemeStyles } from "../styles/Theme";
import getNavigationOptions from "../navigation/NavigationOptions";
import { getCategory } from "../data/categories";

const MealDetailScreen = ({ navigation }) => {
	const category = getCategory(navigation.getParam("categoryId"));
	return (
		<View style={ThemeStyles.screen}>
			<Text style={ThemeStyles.textTitle}>{category.name} Meal</Text>
			<Button title="Go Home" onPress={() => navigation.popToTop()} />
		</View>
	);
};

const styles = StyleSheet.create({});

MealDetailScreen.navigationOptions = {
	...getNavigationOptions(),
	title: "Meal Details",
};
export default MealDetailScreen;
